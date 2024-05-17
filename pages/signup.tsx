
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/proliga_clone/PlasmicGlobalContextsProvider";
// import { ScreenVariantProvider } from "../components/plasmic/proliga_clone/PlasmicGlobalVariant__Screen";
// import { UnnamedGlobalGroupOfVariantsContext } from "../components/plasmic/proliga_clone/PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants";
import { PlasmicSignup } from "../components/plasmic/proliga_clone/PlasmicSignup";
import { useRouter } from "next/router";

function Signup() {


  return (
    // <UnnamedGlobalGroupOfVariantsContext.Provider value={undefined}>
      <GlobalContextsProvider>
        <PageParamsProvider__
          route={useRouter()?.pathname}
          params={useRouter()?.query}
          query={useRouter()?.query}
        >
          <PlasmicSignup />
        </PageParamsProvider__>
      </GlobalContextsProvider>
    // </UnnamedGlobalGroupOfVariantsContext.Provider>
  );
}

export default Signup;
