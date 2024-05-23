// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: 4QnaRcOLXj0D

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
import projectcss from "../proliga_clone/plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicAvatarPlayer.module.css"; // plasmic-import: 4QnaRcOLXj0D/css

createPlasmicElementProxy;

export type PlasmicAvatarPlayer__VariantMembers = {};
export type PlasmicAvatarPlayer__VariantsArgs = {};
type VariantPropType = keyof PlasmicAvatarPlayer__VariantsArgs;
export const PlasmicAvatarPlayer__VariantProps = new Array<VariantPropType>();

export type PlasmicAvatarPlayer__ArgsType = {
  image?: React.ComponentProps<typeof PlasmicImg__>["src"];
  name?: string;
  clickOn?: (event: any) => void;
  clubLogo?: React.ComponentProps<typeof PlasmicImg__>["src"];
};
type ArgPropType = keyof PlasmicAvatarPlayer__ArgsType;
export const PlasmicAvatarPlayer__ArgProps = new Array<ArgPropType>(
  "image",
  "name",
  "clickOn",
  "clubLogo"
);

export type PlasmicAvatarPlayer__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultAvatarPlayerProps {
  image?: React.ComponentProps<typeof PlasmicImg__>["src"];
  name?: string;
  clickOn?: (event: any) => void;
  clubLogo?: React.ComponentProps<typeof PlasmicImg__>["src"];
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAvatarPlayer__RenderFunc(props: {
  variants: PlasmicAvatarPlayer__VariantsArgs;
  args: PlasmicAvatarPlayer__ArgsType;
  overrides: PlasmicAvatarPlayer__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          image:
            "https://i.tribune-group.com/0001/a68a4daf/resize-crop(w=500;h=500):sharpen(level=0):output(format=gif)/wp-content/themes/dt/images/no-user.gif",
          name: "Player",
          clubLogo: {
            src: "/plasmic/proliga/images/logoDesignTemplateB588De7Cc0B07E82392C3B2Ea4Ea7B73Screenjpg.jpg",
            fullWidth: 690,
            fullHeight: 690,
            aspectRatio: undefined
          }
        },
        props.args
      ),
    [props.args]
  );

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
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__a9SuT)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          onClick={args.clickOn}
          src={args.image}
          width={"52.5px"}
        />

        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__iv6Eb)}
          displayHeight={"10px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"10px"}
          loading={"lazy"}
          src={args.clubLogo}
        />
      </div>
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.name;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "Player";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text"],
  freeBox: ["freeBox"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAvatarPlayer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAvatarPlayer__VariantsArgs;
    args?: PlasmicAvatarPlayer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAvatarPlayer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAvatarPlayer__ArgsType,
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
          internalArgPropNames: PlasmicAvatarPlayer__ArgProps,
          internalVariantPropNames: PlasmicAvatarPlayer__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAvatarPlayer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAvatarPlayer";
  } else {
    func.displayName = `PlasmicAvatarPlayer.${nodeName}`;
  }
  return func;
}

export const PlasmicAvatarPlayer = Object.assign(
  // Top-level PlasmicAvatarPlayer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicAvatarPlayer
    internalVariantProps: PlasmicAvatarPlayer__VariantProps,
    internalArgProps: PlasmicAvatarPlayer__ArgProps
  }
);

export default PlasmicAvatarPlayer;
/* prettier-ignore-end */
