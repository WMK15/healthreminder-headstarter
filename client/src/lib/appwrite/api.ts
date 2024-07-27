import { ID, Query } from "appwrite";

import { INewUser} from "@/types";
import { account, appwriteConfig, avatars, databases, storage } from "./config";

export async function createUserAccount(user: INewUser) {
  try {
    // Check if the username is already taken
    const existingUser = await getUserByUsername(user.username);
    if (existingUser) {
      throw new Error("Username is already taken");
    }

    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(user.name);

    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,
      imageUrl: avatarUrl,
    });

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// Function to get user by username
export async function getUserByUsername(username: string) {
  try {
    const users = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("username", username)]
    );

    if (users.documents.length > 0) {
      return users.documents[0];
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function saveUserToDB(user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: URL;
  username?: string;
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    );
    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

  export async function signInAccount(user: { email: string; password: string }) {
    try {
      const session = await account.createEmailSession(user.email, user.password);

      return session;
    } catch (error) {
      console.log(error);
    }
  }

  // ============================== GET USER
  export async function getCurrentUser() {
    try {
      const currentAccount = await account.get();

      if (!currentAccount) throw Error;

      const currentUser = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        [Query.equal("accountId", currentAccount.$id)]
      );

      if (!currentUser) throw Error;

      return currentUser.documents[0];
    } catch (error) {
      console.log(error);
    }
  }

  export async function signOutAccount() {
    try {
      const session = await account.deleteSession("current");

      return session;
    } catch (error) {
      console.log(error);
    }
  }

