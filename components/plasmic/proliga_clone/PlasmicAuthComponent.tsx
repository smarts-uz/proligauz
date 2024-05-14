// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: f9VC6U83GUs6

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

import TextInput from "../../TextInput"; // plasmic-import: xwgFLXqL07mD/component
import Button from "../../Button"; // plasmic-import: FZ59S2Z_LV2k/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicAuthComponent.module.css"; // plasmic-import: f9VC6U83GUs6/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: TfB627kbYt5s/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: BLgPkmgd4hOv/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 6EplYmkkN57M/icon

createPlasmicElementProxy;

export type PlasmicAuthComponent__VariantMembers = {
  isSignUpFlow: "isSignUpFlow";
};
export type PlasmicAuthComponent__VariantsArgs = {
  isSignUpFlow?: SingleBooleanChoiceArg<"isSignUpFlow">;
};
type VariantPropType = keyof PlasmicAuthComponent__VariantsArgs;
export const PlasmicAuthComponent__VariantProps = new Array<VariantPropType>(
  "isSignUpFlow"
);

export type PlasmicAuthComponent__ArgsType = {};
type ArgPropType = keyof PlasmicAuthComponent__ArgsType;
export const PlasmicAuthComponent__ArgProps = new Array<ArgPropType>();

export type PlasmicAuthComponent__OverridesType = {
  root?: Flex__<"div">;
  emailInput?: Flex__<typeof TextInput>;
  passwordInput?: Flex__<typeof TextInput>;
  submitButton?: Flex__<typeof Button>;
  link?: Flex__<"a"> & Partial<LinkProps>;
  button?: Flex__<typeof Button>;
};

export interface DefaultAuthComponentProps {
  isSignUpFlow?: SingleBooleanChoiceArg<"isSignUpFlow">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAuthComponent__RenderFunc(props: {
  variants: PlasmicAuthComponent__VariantsArgs;
  args: PlasmicAuthComponent__ArgsType;
  overrides: PlasmicAuthComponent__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "emailInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "passwordInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "isSignUpFlow",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isSignUpFlow
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
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
        sty.root,
        {
          [sty.rootisSignUpFlow]: hasVariant(
            $state,
            "isSignUpFlow",
            "isSignUpFlow"
          )
        }
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__fu39V)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__uwwQu,
            {
              [sty.textisSignUpFlow__uwwQuPPyrn]: hasVariant(
                $state,
                "isSignUpFlow",
                "isSignUpFlow"
              )
            }
          )}
        >
          {hasVariant($state, "isSignUpFlow", "isSignUpFlow")
            ? "Sign Up"
            : "Login"}
        </div>
        <TextInput
          data-plasmic-name={"emailInput"}
          data-plasmic-override={overrides.emailInput}
          autoFocus={
            hasVariant($state, "isSignUpFlow", "isSignUpFlow")
              ? true
              : undefined
          }
          className={classNames("__wab_instance", sty.emailInput, {
            [sty.emailInputisSignUpFlow]: hasVariant(
              $state,
              "isSignUpFlow",
              "isSignUpFlow"
            )
          })}
          onChange={(...eventArgs) => {
            generateStateOnChangeProp($state, ["emailInput", "value"])(
              (e => e.target?.value).apply(null, eventArgs)
            );
          }}
          placeholder={"Enter your email"}
          type={"email"}
          value={generateStateValueProp($state, ["emailInput", "value"]) ?? ""}
        />

        <TextInput
          data-plasmic-name={"passwordInput"}
          data-plasmic-override={overrides.passwordInput}
          className={classNames("__wab_instance", sty.passwordInput, {
            [sty.passwordInputisSignUpFlow]: hasVariant(
              $state,
              "isSignUpFlow",
              "isSignUpFlow"
            )
          })}
          onChange={(...eventArgs) => {
            generateStateOnChangeProp($state, ["passwordInput", "value"])(
              (e => e.target?.value).apply(null, eventArgs)
            );
          }}
          placeholder={"Enter your password"}
          type={"password"}
          value={
            generateStateValueProp($state, ["passwordInput", "value"]) ?? ""
          }
        />

        <Button
          data-plasmic-name={"submitButton"}
          data-plasmic-override={overrides.submitButton}
          className={classNames("__wab_instance", sty.submitButton, {
            [sty.submitButtonisSignUpFlow]: hasVariant(
              $state,
              "isSignUpFlow",
              "isSignUpFlow"
            )
          })}
          color={"green"}
        >
          {hasVariant($state, "isSignUpFlow", "isSignUpFlow")
            ? "Sign Up"
            : "Login"}
        </Button>
        <div className={classNames(projectcss.all, sty.freeBox__ePKyb)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__k1Z9V,
              {
                [sty.textisSignUpFlow__k1Z9VpPyrn]: hasVariant(
                  $state,
                  "isSignUpFlow",
                  "isSignUpFlow"
                )
              }
            )}
          >
            {hasVariant($state, "isSignUpFlow", "isSignUpFlow")
              ? "I already have an account"
              : "Don't have an account"}
          </div>
          <PlasmicLink__
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(projectcss.all, projectcss.a, sty.link, {
              [sty.linkisSignUpFlow]: hasVariant(
                $state,
                "isSignUpFlow",
                "isSignUpFlow"
              )
            })}
            component={Link}
            href={
              hasVariant($state, "isSignUpFlow", "isSignUpFlow")
                ? `/login`
                : `/signup`
            }
            platform={"nextjs"}
          >
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button, {
                [sty.buttonisSignUpFlow]: hasVariant(
                  $state,
                  "isSignUpFlow",
                  "isSignUpFlow"
                )
              })}
              color={"link"}
            >
              {hasVariant($state, "isSignUpFlow", "isSignUpFlow")
                ? "Login here"
                : "Sign Up here"}
            </Button>
          </PlasmicLink__>
        </div>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "emailInput",
    "passwordInput",
    "submitButton",
    "link",
    "button"
  ],
  emailInput: ["emailInput"],
  passwordInput: ["passwordInput"],
  submitButton: ["submitButton"],
  link: ["link", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  emailInput: typeof TextInput;
  passwordInput: typeof TextInput;
  submitButton: typeof Button;
  link: "a";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAuthComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAuthComponent__VariantsArgs;
    args?: PlasmicAuthComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAuthComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAuthComponent__ArgsType,
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
          internalArgPropNames: PlasmicAuthComponent__ArgProps,
          internalVariantPropNames: PlasmicAuthComponent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAuthComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAuthComponent";
  } else {
    func.displayName = `PlasmicAuthComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicAuthComponent = Object.assign(
  // Top-level PlasmicAuthComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    emailInput: makeNodeComponent("emailInput"),
    passwordInput: makeNodeComponent("passwordInput"),
    submitButton: makeNodeComponent("submitButton"),
    link: makeNodeComponent("link"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicAuthComponent
    internalVariantProps: PlasmicAuthComponent__VariantProps,
    internalArgProps: PlasmicAuthComponent__ArgProps
  }
);

export default PlasmicAuthComponent;
/* prettier-ignore-end */
