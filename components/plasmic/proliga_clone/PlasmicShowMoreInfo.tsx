// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: KFKTV1su0dbH

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicShowMoreInfo.module.css"; // plasmic-import: KFKTV1su0dbH/css

createPlasmicElementProxy;

export type PlasmicShowMoreInfo__VariantMembers = {};
export type PlasmicShowMoreInfo__VariantsArgs = {};
type VariantPropType = keyof PlasmicShowMoreInfo__VariantsArgs;
export const PlasmicShowMoreInfo__VariantProps = new Array<VariantPropType>();

export type PlasmicShowMoreInfo__ArgsType = {};
type ArgPropType = keyof PlasmicShowMoreInfo__ArgsType;
export const PlasmicShowMoreInfo__ArgProps = new Array<ArgPropType>();

export type PlasmicShowMoreInfo__OverridesType = {
  root?: Flex__<"div">;
  position?: Flex__<"div">;
  link?: Flex__<"a"> & Partial<LinkProps>;
};

export interface DefaultShowMoreInfoProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicShowMoreInfo__RenderFunc(props: {
  variants: PlasmicShowMoreInfo__VariantsArgs;
  args: PlasmicShowMoreInfo__ArgsType;
  overrides: PlasmicShowMoreInfo__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "73362b7e-ced3-4eaa-a806-842e83528f32",
        userArgs: {
          filters: [$ctx.params.id]
        },
        cacheKey: `plasmic.$.${(() => {
          try {
            return "getOne";
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "";
            }
            throw e;
          }
        })()}.$.73362b7e-ced3-4eaa-a806-842e83528f32.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__qCx1L)}>
            <div className={classNames(projectcss.all, sty.freeBox__xnMdf)}>
              <div className={classNames(projectcss.all, sty.freeBox__xpCq)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__tmgsT)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={(() => {
                    try {
                      return $queries.query.data[0].player_img;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()}
                />
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__e2Hpz)}>
                <div
                  data-plasmic-name={"position"}
                  data-plasmic-override={overrides.position}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.position
                  )}
                >
                  {"Position"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__oE7P
                  )}
                >
                  {"FSYP"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__h975)}>
                <PlasmicLink__
                  data-plasmic-name={"link"}
                  data-plasmic-override={overrides.link}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link
                  )}
                  component={Link}
                  href={"https://www.plasmic.app/"}
                  platform={"nextjs"}
                >
                  {"STR"}
                </PlasmicLink__>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__q0GOb
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return $queries.query.data[0].player_name;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rjhOi
                  )}
                >
                  {"166"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__kr515)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___61Lug
                  )}
                >
                  {"Value"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pqiO1
                  )}
                >
                  {"Avarage"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___97DUr)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__ohJgz)}
                  displayHeight={"14px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"14px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/proliga_clone/images/freeEuroCoinIcon2141Thumbpng.png",
                    fullWidth: 512,
                    fullHeight: 512,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___1PPyj
                  )}
                >
                  {"8.175.716"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hoqzv
                  )}
                >
                  {"6,15"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "position", "link"],
  position: ["position"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  position: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicShowMoreInfo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicShowMoreInfo__VariantsArgs;
    args?: PlasmicShowMoreInfo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicShowMoreInfo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicShowMoreInfo__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicShowMoreInfo__ArgProps,
          internalVariantPropNames: PlasmicShowMoreInfo__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicShowMoreInfo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicShowMoreInfo";
  } else {
    func.displayName = `PlasmicShowMoreInfo.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={null}
      appId={"tDWy3GXn2mzd9e2xUaPdmu"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={false}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

export const PlasmicShowMoreInfo = Object.assign(
  // Top-level PlasmicShowMoreInfo renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    position: makeNodeComponent("position"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicShowMoreInfo
    internalVariantProps: PlasmicShowMoreInfo__VariantProps,
    internalArgProps: PlasmicShowMoreInfo__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicShowMoreInfo;
/* prettier-ignore-end */
