// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rzvTD8ZwUeCH8ubQggUeej
// Component: wfaeV19DYY9rs4
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Logo from "../../Logo"; // plasmic-import: 845KO9WkT3T-Jb/component
import Button from "../../Button"; // plasmic-import: DwrvksJMh9765t/component

import { useScreenVariants as useScreenVariants_4PWfG1Q762PT6 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 4PWfG1Q762p-t6/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_generic_landing_page.module.css"; // plasmic-import: rzvTD8ZwUeCH8ubQggUeej/projectcss
import sty from "./PlasmicFooterSection.module.css"; // plasmic-import: wfaeV19DYY9rs4/css

import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: htmrBITMLsOB7g/icon
import GithubIcon from "./icons/PlasmicIcon__Github"; // plasmic-import: WIKZGCkM9dP2cr/icon
import LinkedinIcon from "./icons/PlasmicIcon__Linkedin"; // plasmic-import: T-wgaPDuHIr-X_/icon
import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: nEN4LMVKiUcztc/icon

export type PlasmicFooterSection__VariantMembers = {};

export type PlasmicFooterSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterSection__VariantsArgs;
export const PlasmicFooterSection__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterSection__ArgsType = {};
type ArgPropType = keyof PlasmicFooterSection__ArgsType;
export const PlasmicFooterSection__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterSection__OverridesType = {
  root?: p.Flex<"div">;
  logo?: p.Flex<typeof Logo>;
};

export interface DefaultFooterSectionProps {
  className?: string;
}

export const defaultFooterSection__Args: Partial<PlasmicFooterSection__ArgsType> =
  {};

function PlasmicFooterSection__RenderFunc(props: {
  variants: PlasmicFooterSection__VariantsArgs;
  args: PlasmicFooterSection__ArgsType;
  overrides: PlasmicFooterSection__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultFooterSection__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_4PWfG1Q762PT6()
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
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__p7NnZ)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__qSrlr)}
        >
          <Logo
            data-plasmic-name={"logo"}
            data-plasmic-override={overrides.logo}
            _50Opaque={true}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___0Syjw)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___6RmH1
              )}
            >
              {"Connect with us"}
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__pJoT5)}
            >
              <TwitterIcon
                className={classNames(projectcss.all, sty.svg__l1B2I)}
                role={"img"}
              />

              <GithubIcon
                className={classNames(projectcss.all, sty.svg__fdFtV)}
                role={"img"}
              />

              <LinkedinIcon
                className={classNames(projectcss.all, sty.svg__vjR1V)}
                role={"img"}
              />
            </p.Stack>
          </p.Stack>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__nodcX)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qXVi
            )}
          >
            {"Product"}
          </div>

          <Button
            className={classNames("__wab_instance", sty.button__sKb4M)}
            color={"navLink" as const}
            flat={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kfD9U
              )}
            >
              {"Pricing"}
            </div>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__hpGm5)}
            color={"navLink" as const}
            flat={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nVsno
              )}
            >
              {"Log in"}
            </div>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__ob6Nz)}
            color={"navLink" as const}
            flat={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bsLfP
              )}
            >
              {"Integrations"}
            </div>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__qEpaR)}
            color={"navLink" as const}
            flat={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3U1YM
              )}
            >
              {"Insights"}
            </div>
          </Button>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__aNa2Q)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__oPnxI
            )}
          >
            {"Support"}
          </div>

          <Button
            className={classNames("__wab_instance", sty.button___196Bp)}
            color={"navLink" as const}
            flat={true}
          >
            {"Documentation"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__lyOi4)}
            color={"navLink" as const}
            flat={true}
          >
            {"FAQs"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button___11GAe)}
            color={"navLink" as const}
            flat={true}
          >
            {"Status"}
          </Button>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___19Qx7)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__rmzqI
            )}
          >
            {"Company"}
          </div>

          <Button
            className={classNames("__wab_instance", sty.button__eMlwv)}
            color={"navLink" as const}
            flat={true}
          >
            {"About"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__hWcxU)}
            color={"navLink" as const}
            flat={true}
          >
            {"Contact us"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button___6Rm20)}
            color={"navLink" as const}
            flat={true}
          >
            {"Careers"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__krFkh)}
            color={"navLink" as const}
            flat={true}
          >
            {"Media"}
          </Button>
        </p.Stack>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "logo"],
  logo: ["logo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  logo: typeof Logo;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterSection__VariantsArgs;
    args?: PlasmicFooterSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooterSection__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooterSection__ArgProps,
      internalVariantPropNames: PlasmicFooterSection__VariantProps
    });

    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),

    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */