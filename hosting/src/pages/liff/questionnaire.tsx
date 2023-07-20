import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

export default function LiffQuestionnairePage() {
  // const [liffObject, setLiffObject] = useState(null);
  // const [liffError, setLiffError] = useState(null);
  const liffId = process.env.NEXT_PUBLIC_LIFF_ID;

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff").then((liff: any) => {
      console.log("start liff.init()...");
      liff
        .init({
          liffId: liffId,
          withLoginOnExternalBrowser: true,
        })
        .then(() => {
          const idToken = liff.getIDToken();
          console.log(idToken); // print raw idToken object
          const DecodedIdToken = liff.getDecodedIDToken();
          console.log(DecodedIdToken); // print decoded idToken object
          console.log("liff.init() done");
          // setLiffObject(liff);
        })
        .catch((error) => {
          console.log(`liff.init() failed: ${error}`);
          if (!process.env.liffId) {
            console.info(
              "LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable."
            );
          }
          // setLiffError(error.toString());
        });
    });
  }, []);

  // Provide `liff` object and `liffError` object
  // to page component as property
  // pageProps.liff = liffObject;
  // pageProps.liffError = liffError;
  return <p>questionnaire</p>;
}
