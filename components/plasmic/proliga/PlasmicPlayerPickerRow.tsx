// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: NaQtMjgilBY9

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

import { useScreenVariants as useScreenVariants_8Rmrqs5Mzp6I } from "../proliga_clone/PlasmicGlobalVariant__Screen"; // plasmic-import: 8Rmrqs5Mzp6I/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "../proliga_clone/plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicPlayerPickerRow.module.css"; // plasmic-import: NaQtMjgilBY9/css

createPlasmicElementProxy;

export type PlasmicPlayerPickerRow__VariantMembers = {};
export type PlasmicPlayerPickerRow__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlayerPickerRow__VariantsArgs;
export const PlasmicPlayerPickerRow__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPlayerPickerRow__ArgsType = {
  clubImage?: React.ComponentProps<typeof PlasmicImg__>["src"];
  position?: string;
  fsyp?: string;
  name?: string;
  price?: string;
  update?: (event: any) => void;
  firstImage?: React.ComponentProps<typeof PlasmicImg__>["src"];
};
type ArgPropType = keyof PlasmicPlayerPickerRow__ArgsType;
export const PlasmicPlayerPickerRow__ArgProps = new Array<ArgPropType>(
  "clubImage",
  "position",
  "fsyp",
  "name",
  "price",
  "update",
  "firstImage"
);

export type PlasmicPlayerPickerRow__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultPlayerPickerRowProps {
  clubImage?: React.ComponentProps<typeof PlasmicImg__>["src"];
  position?: string;
  fsyp?: string;
  name?: string;
  price?: string;
  update?: (event: any) => void;
  firstImage?: React.ComponentProps<typeof PlasmicImg__>["src"];
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPlayerPickerRow__RenderFunc(props: {
  variants: PlasmicPlayerPickerRow__VariantsArgs;
  args: PlasmicPlayerPickerRow__ArgsType;
  overrides: PlasmicPlayerPickerRow__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          clubImage: {
            src: "/plasmic/proliga/images/logoDesignTemplateB588De7Cc0B07E82392C3B2Ea4Ea7B73Screenjpg.jpg",
            fullWidth: 690,
            fullHeight: 690,
            aspectRatio: undefined
          },
          position: "DEF",
          fsyp: "0",
          price: "0"
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_8Rmrqs5Mzp6I()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      onClick={args.update}
    >
      <PlasmicImg__
        alt={""}
        className={classNames(sty.img__bjNN)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"auto"}
        height={"40px"}
        loading={"lazy"}
        src={args.firstImage}
        width={"40px"}
      />

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__kWvhV
        )}
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
                return "Oblak";
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
          sty.text__e1ZrQ
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.position;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "GOA";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <PlasmicImg__
        alt={""}
        className={classNames(sty.img__oDyDd)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"14px"}
        loading={"lazy"}
        src={{
          src: "/plasmic/proliga_clone/images/pngtreeEuroSymbolCurrencyPngImage3974231Png2.png",
          fullWidth: 512,
          fullHeight: 512,
          aspectRatio: undefined
        }}
      />

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__uFtA1
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.price;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "1.920.356";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <PlasmicImg__
        alt={""}
        className={classNames(sty.img__p539M)}
        displayHeight={"30px"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"30px"}
        height={"21.73px"}
        loading={"lazy"}
        src={args.clubImage}
        width={"21px"}
      />

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___6Ak9J
        )}
      >
        {"FSYP"}
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__rhWYp
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.fsyp;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "93";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlayerPickerRow__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlayerPickerRow__VariantsArgs;
    args?: PlasmicPlayerPickerRow__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlayerPickerRow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPlayerPickerRow__ArgsType,
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
          internalArgPropNames: PlasmicPlayerPickerRow__ArgProps,
          internalVariantPropNames: PlasmicPlayerPickerRow__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPlayerPickerRow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlayerPickerRow";
  } else {
    func.displayName = `PlasmicPlayerPickerRow.${nodeName}`;
  }
  return func;
}

export const PlasmicPlayerPickerRow = Object.assign(
  // Top-level PlasmicPlayerPickerRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPlayerPickerRow
    internalVariantProps: PlasmicPlayerPickerRow__VariantProps,
    internalArgProps: PlasmicPlayerPickerRow__ArgProps
  }
);

export default PlasmicPlayerPickerRow;
/* prettier-ignore-end */