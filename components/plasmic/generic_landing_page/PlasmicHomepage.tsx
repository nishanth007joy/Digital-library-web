// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rzvTD8ZwUeCH8ubQggUeej
// Component: bRSdozNIYog7i
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
import Navbar from "../../Navbar"; // plasmic-import: fCniOsjTmprpXE/component
import Section from "../../Section"; // plasmic-import: ko4ZefvedhXpya/component
import ValueProp from "../../ValueProp"; // plasmic-import: m1aHLCmOY0GxGz/component
import FooterSection from "../../FooterSection"; // plasmic-import: wfaeV19DYY9rs4/component

import { useScreenVariants as useScreenVariants_4PWfG1Q762PT6 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 4PWfG1Q762p-t6/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_generic_landing_page.module.css"; // plasmic-import: rzvTD8ZwUeCH8ubQggUeej/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: bRSdozNIYog7i/css

import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: abe58svSjmm4-9/icon

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  headerHeroSection?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  valuePropsSection?: p.Flex<typeof Section>;
  h2?: p.Flex<"h2">;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultHomepageProps {}

export const defaultHomepage__Args: Partial<PlasmicHomepage__ArgsType> = {};

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHomepage__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_4PWfG1Q762PT6()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Home"}</title>
        <meta key="og:title" property="og:title" content={"Home"} />
      </Head>

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
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"headerHeroSection"}
            data-plasmic-override={overrides.headerHeroSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.headerHeroSection)}
          >
            <Navbar
              data-plasmic-name={"navbar"}
              data-plasmic-override={overrides.navbar}
              className={classNames("__wab_instance", sty.navbar)}
            />
          </p.Stack>

          <Section
            data-plasmic-name={"valuePropsSection"}
            data-plasmic-override={overrides.valuePropsSection}
            className={classNames("__wab_instance", sty.valuePropsSection)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__iKkHa)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__m9Z6)}>
                <h2
                  data-plasmic-name={"h2"}
                  data-plasmic-override={overrides.h2}
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2
                  )}
                >
                  {"Proposing values"}
                </h2>
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xLkuV
                )}
              >
                {
                  "Consectetur a adipiscing sagittis sed proin libero himenaeos ornare adipiscing suscipit leo vestibulum facilisi consequat nisi nisi adipiscing habitant facilisis suspendisse hac integer eget quam facilisis sem placerat fames."
                }
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__i1O3J)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__pmxbR)}
              >
                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp__v7P2G)}
                  description={
                    "Nulla odio mauris enim parturient adipiscing vestibulum inceptos."
                  }
                  flatIcon={true}
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__sMdNt)}
                      role={"img"}
                    />
                  }
                  title={"Powerful"}
                />

                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp__hHDbb)}
                  description={
                    "Consequat scelerisque a eros taciti nisl a sodales."
                  }
                  flatIcon={true}
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__onXI)}
                      role={"img"}
                    />
                  }
                  title={"Faster"}
                />

                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp__xWnAb)}
                  description={"At ut condimentum amet adipiscing ac diam a."}
                  flatIcon={true}
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__irKgW)}
                      role={"img"}
                    />
                  }
                  title={"Best and brightest"}
                />

                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp__qdkI)}
                  description={
                    "Donec purus nec vestibulum volutpat vivamus vulputate suspendisse."
                  }
                  flatIcon={true}
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__rkvWq)}
                      role={"img"}
                    />
                  }
                  title={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__da3Lv
                      )}
                    >
                      {"Dynamic range"}
                    </div>
                  }
                />
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__edOhx)}
              >
                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp___1MxO)}
                  description={
                    "Commodo pretium himenaeos nisi potenti ad in ante."
                  }
                  flatIcon={true}
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__sV43J)}
                      role={"img"}
                    />
                  }
                  title={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__iuGA
                      )}
                    >
                      {"Portable"}
                    </div>
                  }
                />

                <ValueProp
                  className={classNames(
                    "__wab_instance",
                    sty.valueProp___059Xp
                  )}
                  description={
                    "Magna ullamcorper ut arcu nisi a per facilisis."
                  }
                  flatIcon={true}
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__zyViV)}
                      role={"img"}
                    />
                  }
                  title={"Production-ready"}
                />

                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp__ohaq4)}
                  description={
                    "Ac lobortis praesent sagittis dictumst fermentum vestibulum nunc."
                  }
                  flatIcon={true}
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__yAn5E)}
                      role={"img"}
                    />
                  }
                  title={"Magical"}
                />

                <ValueProp
                  className={classNames("__wab_instance", sty.valueProp__a6TJd)}
                  description={
                    "A parturient mi suspendisse nisl inceptos nullam a."
                  }
                  flatIcon={true}
                  icon={
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__z0I7)}
                      role={"img"}
                    />
                  }
                  title={"Accessible"}
                />
              </p.Stack>
            </p.Stack>
          </Section>

          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "headerHeroSection",
    "navbar",
    "valuePropsSection",
    "h2",
    "footerSection"
  ],
  headerHeroSection: ["headerHeroSection", "navbar"],
  navbar: ["navbar"],
  valuePropsSection: ["valuePropsSection", "h2"],
  h2: ["h2"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerHeroSection: "div";
  navbar: typeof Navbar;
  valuePropsSection: typeof Section;
  h2: "h2";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerHeroSection: makeNodeComponent("headerHeroSection"),
    navbar: makeNodeComponent("navbar"),
    valuePropsSection: makeNodeComponent("valuePropsSection"),
    h2: makeNodeComponent("h2"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
