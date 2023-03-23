import type { NextApiRequest, NextApiResponse } from "next";
import { cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "../../../artemis-firebase-firebase-adminsdk-f53t2-cd86dd10ec.json";
import admin from "firebase-admin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const COLLECTION_NAME = "customers";
  //　初期化する
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: cert(serviceAccount as admin.ServiceAccount),
    });
  }
  const db = getFirestore();

  if (req.method === "POST") {
    const docRef = db.collection(COLLECTION_NAME).doc();
    const insertData = {
      name: "satoru",
      age: 12,
    };
    docRef.set(insertData);
  }
  res.status(200);
}
