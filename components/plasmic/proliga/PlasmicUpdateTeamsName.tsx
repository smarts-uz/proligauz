// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: rr9gNzDgkKM7

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
import projectcss from "../proliga_clone/plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicUpdateTeamsName.module.css"; // plasmic-import: rr9gNzDgkKM7/css

import SearchsvgIcon from "../proliga_clone/icons/PlasmicIcon__Searchsvg"; // plasmic-import: TfB627kbYt5s/icon
import ChecksvgIcon from "../proliga_clone/icons/PlasmicIcon__Checksvg"; // plasmic-import: BLgPkmgd4hOv/icon
import IconIcon from "../proliga_clone/icons/PlasmicIcon__Icon"; // plasmic-import: 6EplYmkkN57M/icon

createPlasmicElementProxy;

export type PlasmicUpdateTeamsName__VariantMembers = {
  updateName: "updateName";
};
export type PlasmicUpdateTeamsName__VariantsArgs = {
  updateName?: SingleBooleanChoiceArg<"updateName">;
};
type VariantPropType = keyof PlasmicUpdateTeamsName__VariantsArgs;
export const PlasmicUpdateTeamsName__VariantProps = new Array<VariantPropType>(
  "updateName"
);

export type PlasmicUpdateTeamsName__ArgsType = {
  onUpdateNameChange?: (val: any) => void;
  saveBtn?: (event: any) => void;
};
type ArgPropType = keyof PlasmicUpdateTeamsName__ArgsType;
export const PlasmicUpdateTeamsName__ArgProps = new Array<ArgPropType>(
  "onUpdateNameChange",
  "saveBtn"
);

export type PlasmicUpdateTeamsName__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  textInput?: Flex__<typeof TextInput>;
  button?: Flex__<typeof Button>;
};

export interface DefaultUpdateTeamsNameProps {
  onUpdateNameChange?: (val: any) => void;
  saveBtn?: (event: any) => void;
  updateName?: SingleBooleanChoiceArg<"updateName">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicUpdateTeamsName__RenderFunc(props: {
  variants: PlasmicUpdateTeamsName__VariantsArgs;
  args: PlasmicUpdateTeamsName__ArgsType;
  overrides: PlasmicUpdateTeamsName__OverridesType;
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
        path: "updateName",
        type: "writable",
        variableType: "variant",

        valueProp: "updateName",
        onChangeProp: "onUpdateNameChange"
      },
      {
        path: "textInput.value",
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
    $queries: {},
    $refs
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
        sty.root,
        { [sty.rootupdateName]: hasVariant($state, "updateName", "updateName") }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxupdateName]: hasVariant(
            $state,
            "updateName",
            "updateName"
          )
        })}
        onClick={async event => {
          const $steps = {};

          $steps["updateUpdateName"] = true
            ? (() => {
                const actionArgs = {
                  vgroup: "updateName",
                  operation: 2,
                  value: "updateName"
                };
                return (({ vgroup, value }) => {
                  if (typeof value === "string") {
                    value = [value];
                  }

                  const oldValue = $stateGet($state, vgroup);
                  $stateSet($state, vgroup, !oldValue);
                  return !oldValue;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateUpdateName"] != null &&
            typeof $steps["updateUpdateName"] === "object" &&
            typeof $steps["updateUpdateName"].then === "function"
          ) {
            $steps["updateUpdateName"] = await $steps["updateUpdateName"];
          }
        }}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gMbP,
            {
              [sty.textupdateName__gMbPVaVPw]: hasVariant(
                $state,
                "updateName",
                "updateName"
              )
            }
          )}
        >
          {"Name of Team"}
        </div>
      </div>
      <TextInput
        data-plasmic-name={"textInput"}
        data-plasmic-override={overrides.textInput}
        className={classNames("__wab_instance", sty.textInput, {
          [sty.textInputupdateName]: hasVariant(
            $state,
            "updateName",
            "updateName"
          )
        })}
        onChange={(...eventArgs) => {
          generateStateOnChangeProp($state, ["textInput", "value"])(
            (e => e.target?.value).apply(null, eventArgs)
          );
        }}
        value={generateStateValueProp($state, ["textInput", "value"]) ?? ""}
      />

      <Button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames("__wab_instance", sty.button, {
          [sty.buttonupdateName]: hasVariant($state, "updateName", "updateName")
        })}
        color={"blue"}
        onClick={args.saveBtn}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__yfhYm
          )}
        >
          {"Save"}
        </div>
      </Button>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "textInput", "button"],
  freeBox: ["freeBox"],
  textInput: ["textInput"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  textInput: typeof TextInput;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUpdateTeamsName__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUpdateTeamsName__VariantsArgs;
    args?: PlasmicUpdateTeamsName__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUpdateTeamsName__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicUpdateTeamsName__ArgsType,
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
          internalArgPropNames: PlasmicUpdateTeamsName__ArgProps,
          internalVariantPropNames: PlasmicUpdateTeamsName__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUpdateTeamsName__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUpdateTeamsName";
  } else {
    func.displayName = `PlasmicUpdateTeamsName.${nodeName}`;
  }
  return func;
}

export const PlasmicUpdateTeamsName = Object.assign(
  // Top-level PlasmicUpdateTeamsName renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicUpdateTeamsName
    internalVariantProps: PlasmicUpdateTeamsName__VariantProps,
    internalArgProps: PlasmicUpdateTeamsName__ArgProps
  }
);

export default PlasmicUpdateTeamsName;
/* prettier-ignore-end */