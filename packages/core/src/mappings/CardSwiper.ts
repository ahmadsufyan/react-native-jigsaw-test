import {
    COMPONENT_TYPES,
    createBoolProp,
    createNumberProp,
    createStaticNumberProp,
    GROUPS,
    Triggers,
    createActionProp,
  } from "@draftbit/types";
  
  export const SEED_DATA = {
    name: "Swiper",
    tag: "Swiper",
    description: "Swiper container",
    category: COMPONENT_TYPES.swiper,
    layout: {
      height: 300,
      width: "100%",
    },
    triggers: [Triggers.OnIndexChanged, Triggers.OnEndReached],
    props: {
      onIndexChanged: createActionProp(),
      onEndReached: createActionProp(),
      verticalSwipe: createBoolProp({
        group: GROUPS.basic,
        label: "Vertical Swap",
        defaultValue: true,
      }),
      horizontalSwipe: createBoolProp({
        group: GROUPS.basic,
        label: "Horizontal Swap",
        defaultValue: true,
      }),
      animateCardOpacity: createBoolProp({
        group: GROUPS.basic,
        label: "Opacity Animation",
        defaultValue: true,
      }),
      swipeAnimationDuration: createStaticNumberProp({
        group: GROUPS.basic,
        label: "Animation Duration",
        description: "Animation Duration",
        defaultValue: 350,
        min: 100,
        max: 2000,
        step: 50,
      }),
      stackScale: createStaticNumberProp({
        group: GROUPS.advanced,
        label: "Stack Scale",
        description: "Percentage to reduce the size of each underlaying card",
        defaultValue: 5,
        min: 0,
        max: 100,
        step: 1,
      }),
      stackSeparation: createNumberProp({
        group: GROUPS.advanced,
        label: "Animation Duration",
        description: "Vertical separation between underlaying cards",
        defaultValue: 10,
      }),
      stackAnimationFriction: createNumberProp({
        group: GROUPS.advanced,
        label: "Friction",
        description: "Animation Friction (Bounciness)",
        defaultValue: 7,
      }),
      stackAnimationTension: createNumberProp({
        group: GROUPS.advanced,
        label: "Tension",
        description: "Animation Tension (Speed)",
        defaultValue: 40,
      }),
    },
  };
  