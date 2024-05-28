// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: a1eyFQc8LDBj

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

import Button from "../../Button"; // plasmic-import: FZ59S2Z_LV2k/component
import LoginButton2 from "../../LoginButton2"; // plasmic-import: 4z0H5ajimEuS/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariants_8Rmrqs5Mzp6I } from "../proliga_clone/PlasmicGlobalVariant__Screen"; // plasmic-import: 8Rmrqs5Mzp6I/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../proliga_clone/plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicAdminNavbar.module.css"; // plasmic-import: a1eyFQc8LDBj/css

import ChecksvgIcon from "../proliga_clone/icons/PlasmicIcon__Checksvg"; // plasmic-import: BLgPkmgd4hOv/icon
import IconIcon from "../proliga_clone/icons/PlasmicIcon__Icon"; // plasmic-import: 6EplYmkkN57M/icon

createPlasmicElementProxy;

export type PlasmicAdminNavbar__VariantMembers = {};
export type PlasmicAdminNavbar__VariantsArgs = {};
type VariantPropType = keyof PlasmicAdminNavbar__VariantsArgs;
export const PlasmicAdminNavbar__VariantProps = new Array<VariantPropType>();

export type PlasmicAdminNavbar__ArgsType = {};
type ArgPropType = keyof PlasmicAdminNavbar__ArgsType;
export const PlasmicAdminNavbar__ArgProps = new Array<ArgPropType>();

export type PlasmicAdminNavbar__OverridesType = {
  root?: Flex__<"div">;
  loginButton2?: Flex__<typeof LoginButton2>;
};

export interface DefaultAdminNavbarProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAdminNavbar__RenderFunc(props: {
  variants: PlasmicAdminNavbar__VariantsArgs;
  args: PlasmicAdminNavbar__ArgsType;
  overrides: PlasmicAdminNavbar__OverridesType;
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
        className={classNames(projectcss.all, sty.freeBox__wBOxA)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__v7Nb6)}
        >
          <PlasmicLink__
            className={classNames(projectcss.all, projectcss.a, sty.link___437)}
            component={Link}
            href={`/`}
            platform={"nextjs"}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__lIcCf)}
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
            className={classNames(projectcss.all, sty.freeBox__knWM)}
          >
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__tBrws
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
                  className={classNames("__wab_instance", sty.button__kn5Ja)}
                  endIcon={
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg___5UeOl)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg___2GcuQ)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___3XipP
                    )}
                  >
                    {"Compotition"}
                  </div>
                </Button>
              ) : null}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__co02
              )}
              component={Link}
              href={`/matches`}
              platform={"nextjs"}
            >
              <Button
                className={classNames("__wab_instance", sty.button__clcQd)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__f7R81)}
                    role={"img"}
                  />
                }
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__a1CRl)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___3Ku1W
                  )}
                >
                  {"Fixture"}
                </div>
              </Button>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__yerj
              )}
              component={Link}
              href={`/breaking-news`}
              platform={"nextjs"}
            >
              <Button
                className={classNames("__wab_instance", sty.button__yNgNa)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg___2P8I3)}
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
                    className={classNames(projectcss.all, sty.svg__iJjC3)}
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
                    sty.text__wgvuv
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
                sty.link__hn4Cc
              )}
              component={Link}
              href={`/markets`}
              platform={"nextjs"}
            >
              <Button
                className={classNames("__wab_instance", sty.button__z9KmJ)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg___1T0Vi)}
                    role={"img"}
                  />
                }
                link={`/markets`}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToMarkets"] = true
                    ? (() => {
                        const actionArgs = { destination: `/markets` };
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
                    className={classNames(projectcss.all, sty.svg__vq809)}
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
                    sty.text__q7ZZn
                  )}
                >
                  {"Points"}
                </div>
              </Button>
            </PlasmicLink__>
          </Stack__>
          {false ? (
            <div className={classNames(projectcss.all, sty.freeBox___7Kayg)}>
              <button
                className={classNames(
                  projectcss.all,
                  projectcss.button,
                  projectcss.__wab_text,
                  sty.button__uinzy
                )}
              >
                {"Sign up"}
              </button>
              <Button
                className={classNames("__wab_instance", sty.button__wljwG)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__jJjj5)}
                    role={"img"}
                  />
                }
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__vFNx)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ynmSw
                  )}
                >
                  {"Log in"}
                </div>
              </Button>
            </div>
          ) : null}
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__gzjVv)}
        >
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__gMEj)}
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
              sty.link__rRs07
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
                className={classNames("__wab_instance", sty.button__v2XbC)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__mlgQk)}
                    role={"img"}
                  />
                }
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg___362DY)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pUjUj
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
              sty.link__dsqgG
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
        </Stack__>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___2EcMv
          )}
        >
          {"Admin"}
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
  PlasmicAdminNavbar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAdminNavbar__VariantsArgs;
    args?: PlasmicAdminNavbar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAdminNavbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAdminNavbar__ArgsType,
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
          internalArgPropNames: PlasmicAdminNavbar__ArgProps,
          internalVariantPropNames: PlasmicAdminNavbar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAdminNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAdminNavbar";
  } else {
    func.displayName = `PlasmicAdminNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicAdminNavbar = Object.assign(
  // Top-level PlasmicAdminNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loginButton2: makeNodeComponent("loginButton2"),

    // Metadata about props expected for PlasmicAdminNavbar
    internalVariantProps: PlasmicAdminNavbar__VariantProps,
    internalArgProps: PlasmicAdminNavbar__ArgProps
  }
);

export default PlasmicAdminNavbar;
/* prettier-ignore-end */
