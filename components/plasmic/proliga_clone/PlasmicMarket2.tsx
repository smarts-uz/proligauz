// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: Kg9RPQ5P0NJA

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

import Navbar from "../../Navbar"; // plasmic-import: TKT8XnZtrLZi/component
import Clubs2 from "../../Clubs2"; // plasmic-import: 3EueAFP_3sEI/component
import MarketMember from "../../MarketMember"; // plasmic-import: 4Bc2YM6MYzzT/component
import Footer from "../../Footer"; // plasmic-import: kIdovXGtWiEz/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicMarket2.module.css"; // plasmic-import: Kg9RPQ5P0NJA/css

createPlasmicElementProxy;

export type PlasmicMarket2__VariantMembers = {};
export type PlasmicMarket2__VariantsArgs = {};
type VariantPropType = keyof PlasmicMarket2__VariantsArgs;
export const PlasmicMarket2__VariantProps = new Array<VariantPropType>();

export type PlasmicMarket2__ArgsType = {};
type ArgPropType = keyof PlasmicMarket2__ArgsType;
export const PlasmicMarket2__ArgProps = new Array<ArgPropType>();

export type PlasmicMarket2__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  clubs2?: Flex__<typeof Clubs2>;
  columns?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultMarket2Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMarket2__RenderFunc(props: {
  variants: PlasmicMarket2__VariantsArgs;
  args: PlasmicMarket2__ArgsType;
  overrides: PlasmicMarket2__OverridesType;
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
    clubPlayers: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "22bad793-23fb-4697-9e46-0b36c07c0aee",
        userArgs: {},
        cacheKey: `plasmic.$.22bad793-23fb-4697-9e46-0b36c07c0aee.$.`,
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
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__vgyTw)}>
            <Clubs2
              data-plasmic-name={"clubs2"}
              data-plasmic-override={overrides.clubs2}
              className={classNames("__wab_instance", sty.clubs2)}
            />
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__peOQ
            )}
          >
            {"Markets"}
          </div>
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div className={classNames(projectcss.all, sty.column__jVZpO)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uEuJs
                )}
              >
                {"Highest transfer Rises"}
              </div>
              {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                (() => {
                  try {
                    return $queries.clubPlayers.data;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return [];
                    }
                    throw e;
                  }
                })()
              ).map((__plasmic_item_0, __plasmic_idx_0) => {
                const currentItem = __plasmic_item_0;
                const currentIndex = __plasmic_idx_0;
                return (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__pCfmu)}
                    key={currentIndex}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__z2H1)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___3Nj1P
                        )}
                      >
                        <PlasmicImg__
                          data-plasmic-name={"img"}
                          data-plasmic-override={overrides.img}
                          alt={""}
                          className={classNames(sty.img)}
                          displayHeight={"auto"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"100%"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={"auto"}
                          loading={"lazy"}
                          src={(() => {
                            try {
                              return currentItem.player_img;
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
                          width={"112px"}
                        />
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__xuJCh
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__tExjm
                          )}
                        >
                          <PlasmicLink__
                            className={classNames(
                              projectcss.all,
                              projectcss.a,
                              projectcss.__wab_text,
                              sty.link___67Oqn
                            )}
                            component={Link}
                            href={"https://www.plasmic.app/"}
                            platform={"nextjs"}
                          >
                            {"DEF"}
                          </PlasmicLink__>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__weYog
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem.player_name;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__bpMQh
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___2Ik0G
                            )}
                          >
                            {"previous value\n4.306.249"}
                          </div>
                        </div>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___8Dmzi
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__fXeP
                          )}
                        >
                          <PlasmicLink__
                            className={classNames(
                              projectcss.all,
                              projectcss.a,
                              projectcss.__wab_text,
                              sty.link__bkoh
                            )}
                            component={Link}
                            href={"#"}
                            platform={"nextjs"}
                          >
                            {"39%"}
                          </PlasmicLink__>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__qgR4E
                          )}
                        >
                          {"Current value"}
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__vDtix
                          )}
                        >
                          {"6.007.170"}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={classNames(projectcss.all, sty.column__rNnDl)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lvR8Q
                )}
              >
                {"Highest market reduction"}
              </div>
              <MarketMember
                borjaMayoral={true}
                className={classNames(
                  "__wab_instance",
                  sty.marketMember__n4EsF
                )}
              />

              <MarketMember
                borjaMayoral={true}
                className={classNames(
                  "__wab_instance",
                  sty.marketMember__ccNDp
                )}
              />

              <MarketMember
                className={classNames("__wab_instance", sty.marketMember__zHaX)}
              />

              <MarketMember
                borjaMayoral={true}
                className={classNames(
                  "__wab_instance",
                  sty.marketMember__fh9Zi
                )}
              />

              <MarketMember
                className={classNames(
                  "__wab_instance",
                  sty.marketMember__vuDvm
                )}
              />

              <MarketMember
                borjaMayoral={true}
                className={classNames(
                  "__wab_instance",
                  sty.marketMember__ziq47
                )}
              />

              <MarketMember
                className={classNames(
                  "__wab_instance",
                  sty.marketMember__xiulL
                )}
              />
            </div>
          </div>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "clubs2", "columns", "img", "footer"],
  navbar: ["navbar"],
  clubs2: ["clubs2"],
  columns: ["columns", "img"],
  img: ["img"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  clubs2: typeof Clubs2;
  columns: "div";
  img: typeof PlasmicImg__;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMarket2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMarket2__VariantsArgs;
    args?: PlasmicMarket2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMarket2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMarket2__ArgsType,
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
          internalArgPropNames: PlasmicMarket2__ArgProps,
          internalVariantPropNames: PlasmicMarket2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMarket2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMarket2";
  } else {
    func.displayName = `PlasmicMarket2.${nodeName}`;
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

export const PlasmicMarket2 = Object.assign(
  // Top-level PlasmicMarket2 renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    clubs2: makeNodeComponent("clubs2"),
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicMarket2
    internalVariantProps: PlasmicMarket2__VariantProps,
    internalArgProps: PlasmicMarket2__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMarket2;
/* prettier-ignore-end */