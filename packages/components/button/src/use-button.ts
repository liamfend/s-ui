import type { ButtonVariantProps } from "@student-ui/theme";

import {HTMLNextUIProps,mapPropsVariants} from "@student-ui/system";
import { button } from "@student-ui/theme";
import {ReactRef, useDOMRef} from "@student-ui/react-utils";
import {useMemo} from "react";

interface Props extends HTMLNextUIProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export type UseButtonProps = Props & ButtonVariantProps;

export function useButton(originalProps: UseButtonProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, button.variantKeys);

  const {ref, as, className, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const styles = useMemo(
  () =>
    button({
      ...variantProps,
      className,
    }),
  [...Object.values(variantProps), className],
);

  return {Component, styles, domRef, ...otherProps};
}

export type UseButtonReturn = ReturnType<typeof useButton>;
