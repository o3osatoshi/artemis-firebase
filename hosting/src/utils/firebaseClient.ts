import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfigEnv = process.env.NEXT_PUBLIC_EBIS_FIREBASE_CONFIG;
if (!firebaseConfigEnv)
  throw new Error("NEXT_PUBLIC_EBIS_FIREBASE_CONFIG is not set");
const firebaseConfig = JSON.parse(firebaseConfigEnv);

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export const auth: Auth = getAuth(app);
