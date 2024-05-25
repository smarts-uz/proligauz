// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: TKT8XnZtrLZi

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

import Button from "../../Button"; // plasmic-import: FZ59S2Z_LV2k/component
import LoginButton2 from "../../LoginButton2"; // plasmic-import: 4z0H5ajimEuS/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariants_8Rmrqs5Mzp6I } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 8Rmrqs5Mzp6I/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: TKT8XnZtrLZi/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: BLgPkmgd4hOv/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 6EplYmkkN57M/icon

createPlasmicElementProxy;

export type PlasmicNavbar__VariantMembers = {};
export type PlasmicNavbar__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavbar__VariantsArgs;
export const PlasmicNavbar__VariantProps = new Array<VariantPropType>();

export type PlasmicNavbar__ArgsType = {};
type ArgPropType = keyof PlasmicNavbar__ArgsType;
export const PlasmicNavbar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbar__OverridesType = {
  root?: Flex__<"div">;
  loginButton2?: Flex__<typeof LoginButton2>;
};

export interface DefaultNavbarProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavbar__RenderFunc(props: {
  variants: PlasmicNavbar__VariantsArgs;
  args: PlasmicNavbar__ArgsType;
  overrides: PlasmicNavbar__OverridesType;
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

  const $globalActions = useGlobalActions?.();

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    defaultMoney: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "822c885d-5ddd-45c8-b8f0-774400585e7a",
        userArgs: {},
        cacheKey: `plasmic.$.822c885d-5ddd-45c8-b8f0-774400585e7a.$.`,
        invalidatedKeys: null,
        roleId: "f8970d3a-c1ae-4ba8-80dd-90e548ee70d6"
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_8Rmrqs5Mzp6I()
  });

  return (
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
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___9HAj)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__k27Ir)}
        >
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__lBopK
            )}
            component={Link}
            href={`/`}
            platform={"nextjs"}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__qVo0B)}
              displayHeight={"50px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"50px"}
              loading={"lazy"}
              src={{
                src: "/plasmic/proliga/images/photo20240409032849Jpg.jpg",
                fullWidth: 1280,
                fullHeight: 1271,
                aspectRatio: undefined
              }}
            />
          </PlasmicLink__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__js8Ey)}
          >
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__s4Rs
              )}
              component={Link}
              href={`/rankings`}
              platform={"nextjs"}
            >
              {(
                hasVariant(globalVariants, "screen", "portrait")
                  ? true
                  : (() => {
                      try {
                        return true;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return true;
                        }
                        throw e;
                      }
                    })()
              ) ? (
                <Button
                  className={classNames("__wab_instance", sty.button__oWrJi)}
                  endIcon={
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__yGz5S)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg___4AFi8)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__heUm5
                    )}
                  >
                    {"Rankings"}
                  </div>
                </Button>
              ) : null}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link___1LjDr
              )}
              component={Link}
              href={`/matches`}
              platform={"nextjs"}
            >
              <Button
                className={classNames("__wab_instance", sty.button__mAIsq)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__axj0M)}
                    role={"img"}
                  />
                }
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__ypN12)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__oZm4I
                  )}
                >
                  {"Matches"}
                </div>
              </Button>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__kjEp8
              )}
              component={Link}
              href={`/breaking-news`}
              platform={"nextjs"}
            >
              <Button
                className={classNames("__wab_instance", sty.button__j65Sm)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg___0YeHq)}
                    role={"img"}
                  />
                }
                link={`/breaking-news`}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToBreakinNews"] = true
                    ? (() => {
                        const actionArgs = { destination: `/breaking-news` };
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            __nextRouter?.push(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["goToBreakinNews"] != null &&
                    typeof $steps["goToBreakinNews"] === "object" &&
                    typeof $steps["goToBreakinNews"].then === "function"
                  ) {
                    $steps["goToBreakinNews"] = await $steps["goToBreakinNews"];
                  }
                }}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__uHjO)}
                    role={"img"}
                  />
                }
                submitsForm={true}
                target={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__yeuoC
                  )}
                >
                  {"Breaking News"}
                </div>
              </Button>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__vGl2M
              )}
              component={Link}
              href={`/market-2`}
              platform={"nextjs"}
            >
              <Button
                className={classNames("__wab_instance", sty.button__aeyg1)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__z1Gm)}
                    role={"img"}
                  />
                }
                link={`/market-2`}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToMarkets"] = true
                    ? (() => {
                        const actionArgs = { destination: `/market-2` };
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            __nextRouter?.push(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["goToMarkets"] != null &&
                    typeof $steps["goToMarkets"] === "object" &&
                    typeof $steps["goToMarkets"].then === "function"
                  ) {
                    $steps["goToMarkets"] = await $steps["goToMarkets"];
                  }
                }}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__g73CV)}
                    role={"img"}
                  />
                }
                submitsForm={true}
                target={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__alvaL
                  )}
                >
                  {"Market"}
                </div>
              </Button>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__iPsEb
              )}
              component={Link}
              href={`/ideal-xl`}
              platform={"nextjs"}
            >
              <Button
                className={classNames("__wab_instance", sty.button___7KVW)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__jp21T)}
                    role={"img"}
                  />
                }
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__f2L5G)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cjiSe
                  )}
                >
                  {"Ideal XI"}
                </div>
              </Button>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__wEbmD
              )}
              component={Link}
              href={`/absences`}
              platform={"nextjs"}
            >
              <Button
                className={classNames("__wab_instance", sty.button__tnLFg)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__ifSr)}
                    role={"img"}
                  />
                }
                link={`/absences`}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToAbsences"] = true
                    ? (() => {
                        const actionArgs = { destination: `/absences` };
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            __nextRouter?.push(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["goToAbsences"] != null &&
                    typeof $steps["goToAbsences"] === "object" &&
                    typeof $steps["goToAbsences"].then === "function"
                  ) {
                    $steps["goToAbsences"] = await $steps["goToAbsences"];
                  }
                }}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__ek7LQ)}
                    role={"img"}
                  />
                }
                submitsForm={true}
                target={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__wLM
                  )}
                >
                  {"Absences"}
                </div>
              </Button>
            </PlasmicLink__>
            {(() => {
              try {
                return (currentUser?.roleIds ?? []).includes(
                  "f8970d3a-c1ae-4ba8-80dd-90e548ee70d6"
                );
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return false;
                }
                throw e;
              }
            })() ? (
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__fy5Z9
                )}
                component={Link}
                href={`/team/classic`}
                onClick={async event => {
                  const $steps = {};

                  $steps["postgresCreate"] = true
                    ? (() => {
                        const actionArgs = {
                          dataOp: {
                            sourceId: "8cdHi4ivRUEkK6qbegQevF",
                            opId: "c69f6705-8c2d-4a0c-a63e-1e0b3a9519ef",
                            userArgs: {},
                            cacheKey: null,
                            invalidatedKeys: ["plasmic_refresh_all"],
                            roleId: "f8970d3a-c1ae-4ba8-80dd-90e548ee70d6"
                          }
                        };
                        return (async ({ dataOp, continueOnError }) => {
                          try {
                            const response = await executePlasmicDataOp(
                              dataOp,
                              {
                                userAuthToken: dataSourcesCtx?.userAuthToken,
                                user: dataSourcesCtx?.user
                              }
                            );
                            await plasmicInvalidate(dataOp.invalidatedKeys);
                            return response;
                          } catch (e) {
                            if (!continueOnError) {
                              throw e;
                            }
                            return e;
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["postgresCreate"] != null &&
                    typeof $steps["postgresCreate"] === "object" &&
                    typeof $steps["postgresCreate"].then === "function"
                  ) {
                    $steps["postgresCreate"] = await $steps["postgresCreate"];
                  }
                }}
                platform={"nextjs"}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__kGq7)}
                  endIcon={
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg___1QdIx)}
                      role={"img"}
                    />
                  }
                  link={`/team/classic`}
                  onClick={async event => {
                    const $steps = {};

                    $steps["postgresCreate"] = true
                      ? (() => {
                          const actionArgs = {
                            dataOp: {
                              sourceId: "8cdHi4ivRUEkK6qbegQevF",
                              opId: "fad28111-d6a9-4a68-afca-3099e518e8a8",
                              userArgs: {
                                variables: [$queries.defaultMoney.data[0].value]
                              },
                              cacheKey: null,
                              invalidatedKeys: ["plasmic_refresh_all"],
                              roleId: "f8970d3a-c1ae-4ba8-80dd-90e548ee70d6"
                            }
                          };
                          return (async ({ dataOp, continueOnError }) => {
                            try {
                              const response = await executePlasmicDataOp(
                                dataOp,
                                {
                                  userAuthToken: dataSourcesCtx?.userAuthToken,
                                  user: dataSourcesCtx?.user
                                }
                              );
                              await plasmicInvalidate(dataOp.invalidatedKeys);
                              return response;
                            } catch (e) {
                              if (!continueOnError) {
                                throw e;
                              }
                              return e;
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["postgresCreate"] != null &&
                      typeof $steps["postgresCreate"] === "object" &&
                      typeof $steps["postgresCreate"].then === "function"
                    ) {
                      $steps["postgresCreate"] = await $steps["postgresCreate"];
                    }

                    $steps["invokeGlobalAction"] = true
                      ? (() => {
                          const actionArgs = {
                            args: [undefined, "Team created!", undefined, 6]
                          };
                          return $globalActions[
                            "plasmic-antd5-config-provider.showNotification"
                          ]?.apply(null, [...actionArgs.args]);
                        })()
                      : undefined;
                    if (
                      $steps["invokeGlobalAction"] != null &&
                      typeof $steps["invokeGlobalAction"] === "object" &&
                      typeof $steps["invokeGlobalAction"].then === "function"
                    ) {
                      $steps["invokeGlobalAction"] = await $steps[
                        "invokeGlobalAction"
                      ];
                    }

                    $steps["goToTeams"] = true
                      ? (() => {
                          const actionArgs = { destination: `/team/classic` };
                          return (({ destination }) => {
                            if (
                              typeof destination === "string" &&
                              destination.startsWith("#")
                            ) {
                              document
                                .getElementById(destination.substr(1))
                                .scrollIntoView({ behavior: "smooth" });
                            } else {
                              __nextRouter?.push(destination);
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["goToTeams"] != null &&
                      typeof $steps["goToTeams"] === "object" &&
                      typeof $steps["goToTeams"].then === "function"
                    ) {
                      $steps["goToTeams"] = await $steps["goToTeams"];
                    }
                  }}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__duTOh)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                  target={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__q6YEk
                    )}
                  >
                    {"My Team"}
                  </div>
                </Button>
              </PlasmicLink__>
            ) : null}
          </Stack__>
          {false ? (
            <div className={classNames(projectcss.all, sty.freeBox__k04Vr)}>
              <button
                className={classNames(
                  projectcss.all,
                  projectcss.button,
                  projectcss.__wab_text,
                  sty.button__jQvIj
                )}
              >
                {"Sign up"}
              </button>
              <Button
                className={classNames("__wab_instance", sty.button__vtget)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__zJbK9)}
                    role={"img"}
                  />
                }
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg___6CZgq)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__lk2Me
                  )}
                >
                  {"Log in"}
                </div>
              </Button>
            </div>
          ) : null}
        </Stack__>
        <div className={classNames(projectcss.all, sty.freeBox__vxTjO)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__y8Z6M)}
            displayHeight={"40px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? "80px"
                : "120px"
            }
            src={{
              src: "/plasmic/proliga_clone/images/logoSponsorMainWhitepng.png",
              fullWidth: 140,
              fullHeight: 56,
              aspectRatio: undefined
            }}
          />

          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__w8Cli
            )}
            component={Link}
            platform={"nextjs"}
          >
            {(() => {
              try {
                return true;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <Button
                className={classNames("__wab_instance", sty.button__lw2P5)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__wyY71)}
                    role={"img"}
                  />
                }
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__bHHh)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___3CjS
                  )}
                >
                  {"Us"}
                </div>
              </Button>
            ) : null}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___75TH
            )}
            component={Link}
            href={`/login`}
            platform={"nextjs"}
          >
            <LoginButton2
              data-plasmic-name={"loginButton2"}
              data-plasmic-override={overrides.loginButton2}
              className={classNames("__wab_instance", sty.loginButton2)}
            />
          </PlasmicLink__>
        </div>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "loginButton2"],
  loginButton2: ["loginButton2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  loginButton2: typeof LoginButton2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbar__VariantsArgs;
    args?: PlasmicNavbar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavbar__ArgsType,
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
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loginButton2: makeNodeComponent("loginButton2"),

    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
