// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: cv9rvkaGG2VK

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicInjuresEvent2.module.css"; // plasmic-import: cv9rvkaGG2VK/css

createPlasmicElementProxy;

export type PlasmicInjuresEvent2__VariantMembers = {};
export type PlasmicInjuresEvent2__VariantsArgs = {};
type VariantPropType = keyof PlasmicInjuresEvent2__VariantsArgs;
export const PlasmicInjuresEvent2__VariantProps = new Array<VariantPropType>();

export type PlasmicInjuresEvent2__ArgsType = {};
type ArgPropType = keyof PlasmicInjuresEvent2__ArgsType;
export const PlasmicInjuresEvent2__ArgProps = new Array<ArgPropType>();

export type PlasmicInjuresEvent2__OverridesType = {
  root?: Flex__<"div">;
  columns?: Flex__<"div">;
};

export interface DefaultInjuresEvent2Props {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInjuresEvent2__RenderFunc(props: {
  variants: PlasmicInjuresEvent2__VariantsArgs;
  args: PlasmicInjuresEvent2__ArgsType;
  overrides: PlasmicInjuresEvent2__OverridesType;
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
      <div className={classNames(projectcss.all, sty.freeBox__sn2Wj)}>
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__q4AGo)}>
            <div className={classNames(projectcss.all, sty.freeBox__rXo)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__knvzk)}
                displayHeight={"32.5px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"30px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/proliga_clone/images/xetafepng.png",
                  fullWidth: 96,
                  fullHeight: 104,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gagTd
                )}
              >
                {"Borja Mayoral"}
              </div>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__vC7Eq
                )}
                component={Link}
                href={"https://www.plasmic.app/"}
                platform={"nextjs"}
                target={"_blank"}
              >
                {"STR"}
              </PlasmicLink__>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__poZu)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__ntbbr)}
                displayHeight={"32.5px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"30px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/proliga_clone/images/freeRedHospitalClinicIcon10725Thumbpng.png",
                  fullWidth: 512,
                  fullHeight: 512,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__r4Jtx
                )}
              >
                {"Injured"}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__uUwr)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__vaugX)}
                displayHeight={"32.5px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"30px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/proliga_clone/images/freesvgorg59596Png.png",
                  fullWidth: 600,
                  fullHeight: 600,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hO85H
                )}
              >
                {"9.949.399"}
              </div>
            </div>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__ahTh6
              )}
              component={Link}
              href={"https://www.plasmic.app/"}
              platform={"nextjs"}
            >
              {"VALUE RECORD"}
            </PlasmicLink__>
          </div>
          <div className={classNames(projectcss.all, sty.column__lMte4)}>
            <div className={classNames(projectcss.all, sty.freeBox__hQjQl)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zpIsS
                )}
              >
                {"FSYP"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__voMsU
                )}
              >
                {"166"}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__hkL9S)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nClmg
                )}
              >
                {"FSYP 22/23"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xAwEp
                )}
              >
                {"149"}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__mHgyk)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__z8HVi
                )}
              >
                {"AVERAGE"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dBlwb
                )}
              >
                {"6.15"}
              </div>
            </div>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__ntE4Q
              )}
              component={Link}
              href={"https://www.plasmic.app/"}
              platform={"nextjs"}
            >
              {"Team"}
            </PlasmicLink__>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInjuresEvent2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInjuresEvent2__VariantsArgs;
    args?: PlasmicInjuresEvent2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInjuresEvent2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicInjuresEvent2__ArgsType,
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
          internalArgPropNames: PlasmicInjuresEvent2__ArgProps,
          internalVariantPropNames: PlasmicInjuresEvent2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInjuresEvent2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInjuresEvent2";
  } else {
    func.displayName = `PlasmicInjuresEvent2.${nodeName}`;
  }
  return func;
}

export const PlasmicInjuresEvent2 = Object.assign(
  // Top-level PlasmicInjuresEvent2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicInjuresEvent2
    internalVariantProps: PlasmicInjuresEvent2__VariantProps,
    internalArgProps: PlasmicInjuresEvent2__ArgProps
  }
);

export default PlasmicInjuresEvent2;
/* prettier-ignore-end */
