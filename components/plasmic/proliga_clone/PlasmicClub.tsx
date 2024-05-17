// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: xmY-b23pZr3-

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

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Navbar from "../../Navbar"; // plasmic-import: TKT8XnZtrLZi/component
import Clubs2 from "../../Clubs2"; // plasmic-import: 3EueAFP_3sEI/component
import SoccerPlaceMens2 from "../../SoccerPlaceMens2"; // plasmic-import: xodLqMOhDs29/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicClub.module.css"; // plasmic-import: xmY-b23pZr3-/css

createPlasmicElementProxy;

export type PlasmicClub__VariantMembers = {};
export type PlasmicClub__VariantsArgs = {};
type VariantPropType = keyof PlasmicClub__VariantsArgs;
export const PlasmicClub__VariantProps = new Array<VariantPropType>();

export type PlasmicClub__ArgsType = {};
type ArgPropType = keyof PlasmicClub__ArgsType;
export const PlasmicClub__ArgProps = new Array<ArgPropType>();

export type PlasmicClub__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  clubs2?: Flex__<typeof Clubs2>;
  columns?: Flex__<"div">;
  soccerPlaceMens2?: Flex__<typeof SoccerPlaceMens2>;
  goa?: Flex__<"div">;
  def?: Flex__<"div">;
  mid?: Flex__<"div">;
  str?: Flex__<"div">;
};

export interface DefaultClubProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicClub__RenderFunc(props: {
  variants: PlasmicClub__VariantsArgs;
  args: PlasmicClub__ArgsType;
  overrides: PlasmicClub__OverridesType;
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

  const dataSourcesCtx = usePlasmicDataSourceContext();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "7990f9e9-fa4d-4d86-92bd-bd24af6e6e7f",
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
        })()}.$.7990f9e9-fa4d-4d86-92bd-bd24af6e6e7f.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    player: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "cd389ffd-474e-4351-9b57-c04df18a2a1b",
        userArgs: {
          filters: [$queries.query.data[0].id]
        },
        cacheKey: `plasmic.$.cd389ffd-474e-4351-9b57-c04df18a2a1b.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    goa: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "7ae82885-b344-40f8-99da-858490d35afb",
        userArgs: {
          filters: [$queries.query.data[0].id]
        },
        cacheKey: `plasmic.$.7ae82885-b344-40f8-99da-858490d35afb.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    def: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "5a6116dd-64c4-4a33-b23e-3c3a246c57d8",
        userArgs: {
          filters: [$queries.query.data[0].id]
        },
        cacheKey: `plasmic.$.5a6116dd-64c4-4a33-b23e-3c3a246c57d8.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    mid: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "50646560-bd3c-47da-a74f-5e560e687a0c",
        userArgs: {
          filters: [$queries.query.data[0].id]
        },
        cacheKey: `plasmic.$.50646560-bd3c-47da-a74f-5e560e687a0c.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    str: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "19b635c5-f9ee-47d5-8bbb-390113a9389e",
        userArgs: {
          filters: [$queries.query.data[0].id]
        },
        cacheKey: `plasmic.$.19b635c5-f9ee-47d5-8bbb-390113a9389e.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    clubs: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "157523a8-a564-4845-81d4-23951d76d034",
        userArgs: {},
        cacheKey: `plasmic.$.157523a8-a564-4845-81d4-23951d76d034.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    nextMatch: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "540af0f2-9a8a-4a4a-89cd-b7a8775523e2",
        userArgs: {
          filters: [$queries.query.data[0].id]
        },
        cacheKey: `plasmic.$.540af0f2-9a8a-4a4a-89cd-b7a8775523e2.$.`,
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

          <div className={classNames(projectcss.all, sty.freeBox__fqj7O)}>
            <Clubs2
              data-plasmic-name={"clubs2"}
              data-plasmic-override={overrides.clubs2}
              className={classNames("__wab_instance", sty.clubs2)}
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__kUxr)}>
            <div className={classNames(projectcss.all, sty.freeBox__ytdBu)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__mTHw)}
                displayHeight={"45px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"35px"}
                loading={"lazy"}
                src={(() => {
                  try {
                    return $queries.query.data[0].flag_url;
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

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mNzfB
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $queries.query.data[0].name;
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
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___5LEsB)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gIiXv
                )}
              >
                {"Total points"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xnwae
                )}
              >
                {"1746"}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__s2PMp)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pVvd5
                )}
              >
                {"Player available"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rjWsK
                )}
              >
                {"24/27"}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__fvQdx)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nnE7M
                )}
              >
                {"Market Value"}
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__gNto5)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__fbCjm)}
                  displayHeight={"14px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"14px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/proliga_clone/images/europng.png",
                    fullWidth: 512,
                    fullHeight: 512,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jpMr7
                  )}
                >
                  {"24.886.777"}
                </div>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jmBo6
                )}
              >
                {"-120.765.857(-83%)"}
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div className={classNames(projectcss.all, sty.column__mqYQt)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__h0JUm
                )}
              >
                {"Team of the week"}
              </div>
              <SoccerPlaceMens2
                data-plasmic-name={"soccerPlaceMens2"}
                data-plasmic-override={overrides.soccerPlaceMens2}
                className={classNames("__wab_instance", sty.soccerPlaceMens2)}
              />

              <div
                data-plasmic-name={"goa"}
                data-plasmic-override={overrides.goa}
                className={classNames(projectcss.all, sty.goa)}
              >
                {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                  (() => {
                    try {
                      return $queries.goa.data;
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
                      className={classNames(projectcss.all, sty.freeBox__s2ORa)}
                      key={currentIndex}
                    >
                      <PlasmicImg__
                        alt={(() => {
                          try {
                            return currentItem.name;
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
                        aria-hidden={"true"}
                        className={classNames(sty.img__sxe2M)}
                        displayHeight={"110px"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"89px"}
                        loading={"lazy"}
                        src={(() => {
                          try {
                            return currentItem.image;
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
                  );
                })}
              </div>
              <div
                data-plasmic-name={"def"}
                data-plasmic-override={overrides.def}
                className={classNames(projectcss.all, sty.def)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__b6T8Z)}>
                  {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                    (() => {
                      try {
                        return $queries.def.data;
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
                      <PlasmicImg__
                        alt={(() => {
                          try {
                            return currentItem.name;
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
                        className={classNames(sty.img__r0Q4F)}
                        displayHeight={"110px"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"89px"}
                        key={currentIndex}
                        loading={"lazy"}
                        src={(() => {
                          try {
                            return currentItem.image;
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
                    );
                  })}
                </div>
              </div>
              <div
                data-plasmic-name={"mid"}
                data-plasmic-override={overrides.mid}
                className={classNames(projectcss.all, sty.mid)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__wyJc4)}>
                  {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                    (() => {
                      try {
                        return $queries.mid.data;
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
                      <PlasmicImg__
                        alt={(() => {
                          try {
                            return currentItem.name;
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
                        className={classNames(sty.img__gpqzU)}
                        displayHeight={"110px"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"89px"}
                        key={currentIndex}
                        loading={"lazy"}
                        src={(() => {
                          try {
                            return currentItem.image;
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
                    );
                  })}
                </div>
              </div>
              <div
                data-plasmic-name={"str"}
                data-plasmic-override={overrides.str}
                className={classNames(projectcss.all, sty.str)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___5EMuE)}
                >
                  {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                    (() => {
                      try {
                        return $queries.str.data;
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
                      <PlasmicImg__
                        alt={(() => {
                          try {
                            return currentItem.name;
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
                        className={classNames(sty.img__yuTxd)}
                        displayHeight={"110px"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"89px"}
                        key={currentIndex}
                        loading={"lazy"}
                        src={(() => {
                          try {
                            return currentItem.image;
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
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.column__wlm0)}>
              <div className={classNames(projectcss.all, sty.freeBox__usU0P)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__l3ZVp
                  )}
                >
                  {"Next Match"}
                </div>
                {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                  (() => {
                    try {
                      return $queries.nextMatch.data;
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
                      className={classNames(projectcss.all, sty.freeBox__ilRW)}
                      key={currentIndex}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___7LwHj
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return $queries.clubs.data[
                                currentItem.home_id - 1
                              ].name;
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
                      <PlasmicImg__
                        alt={""}
                        className={classNames(sty.img__sQzsp)}
                        displayHeight={"30px"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"20px"}
                        loading={"lazy"}
                        src={(() => {
                          try {
                            return $queries.clubs.data[currentItem.home_id - 1]
                              .flag_url;
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

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__j4PNe
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__wgDbi
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return currentItem.starts_at;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "TOMORROW";
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
                            sty.text___1EB
                          )}
                        >
                          {"0:0"}
                        </div>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___9ZxXp
                        )}
                      >
                        <PlasmicImg__
                          alt={""}
                          className={classNames(sty.img___2TD9Q)}
                          displayHeight={"30px"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"100%"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={"20px"}
                          loading={"lazy"}
                          src={(() => {
                            try {
                              return $queries.clubs.data[
                                currentItem.away_id - 1
                              ].flag_url;
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

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__bjRyz
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return $queries.clubs.data[
                                  currentItem.away_id - 1
                                ].name;
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
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.column__udFqK)} />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "clubs2",
    "columns",
    "soccerPlaceMens2",
    "goa",
    "def",
    "mid",
    "str"
  ],
  navbar: ["navbar"],
  clubs2: ["clubs2"],
  columns: ["columns", "soccerPlaceMens2", "goa", "def", "mid", "str"],
  soccerPlaceMens2: ["soccerPlaceMens2"],
  goa: ["goa"],
  def: ["def"],
  mid: ["mid"],
  str: ["str"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  clubs2: typeof Clubs2;
  columns: "div";
  soccerPlaceMens2: typeof SoccerPlaceMens2;
  goa: "div";
  def: "div";
  mid: "div";
  str: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicClub__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicClub__VariantsArgs;
    args?: PlasmicClub__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicClub__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicClub__ArgsType,
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
          internalArgPropNames: PlasmicClub__ArgProps,
          internalVariantPropNames: PlasmicClub__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicClub__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicClub";
  } else {
    func.displayName = `PlasmicClub.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={"f8970d3a-c1ae-4ba8-80dd-90e548ee70d6"}
      appId={"tDWy3GXn2mzd9e2xUaPdmu"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={false}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

export const PlasmicClub = Object.assign(
  // Top-level PlasmicClub renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    clubs2: makeNodeComponent("clubs2"),
    columns: makeNodeComponent("columns"),
    soccerPlaceMens2: makeNodeComponent("soccerPlaceMens2"),
    goa: makeNodeComponent("goa"),
    def: makeNodeComponent("def"),
    mid: makeNodeComponent("mid"),
    str: makeNodeComponent("str"),

    // Metadata about props expected for PlasmicClub
    internalVariantProps: PlasmicClub__VariantProps,
    internalArgProps: PlasmicClub__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicClub;
/* prettier-ignore-end */
