import React from "react";
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import SwiperComponent from "react-native-deck-swiper";

export interface SwiperProps<T> {
  data?: Array<T>;
  swipeAnimationDuration?: number;
  stackAnimationFriction?: number;
  stackAnimationTension?: number;
  stackScale?: number;
  stackSeparation?: number;
  horizontalSwipe?: boolean;
  verticalSwipe?: boolean;
  animateCardOpacity?: boolean;
  keyExtractor: (item: T, index: number) => string;
  renderItem?: ({ item, index }: { item: T; index: number }) => JSX.Element;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onIndexChanged?: (index: number) => void;
  onEndReached?: () => void;
}

const Swiper = ({
  data,
  swipeAnimationDuration = 350,
  stackAnimationFriction = 7,
  stackAnimationTension = 40,
  stackScale = 5,
  stackSeparation = 10,
  horizontalSwipe = true,
  verticalSwipe = true,
  animateCardOpacity = true,
  keyExtractor,
  renderItem,
  children,
  onIndexChanged,
  onEndReached,
  style,
}: SwiperProps<any>) => {
  return (
    <SwiperComponent
      containerStyle={[styles.container, style]}
      cardStyle={[styles.card]}
      horizontalSwipe={horizontalSwipe}
      verticalSwipe={verticalSwipe}
      stackScale={stackScale}
      stackSeparation={stackSeparation}
      stackAnimationFriction={stackAnimationFriction}
      stackAnimationTension={stackAnimationTension}
      onSwiped={onIndexChanged}
      onSwipedAll={onEndReached}
      cards={
        data && renderItem ? data : [...Array(React.Children.count(children))]
      }
      renderCard={(item: any, index: number) => {
        const key = keyExtractor ? keyExtractor(item, index) : index;

        if (renderItem) {
          const component = renderItem({ item, index });
          if (!component) {
            return null;
          }
          return React.cloneElement(component, { key });
        } else {
          const element = React.Children.toArray(children)[index];
          if (!React.isValidElement(element)) {
            return null;
          }
          return React.cloneElement(element, { key });
        }
      }}
      cardVerticalMargin={0}
      stackSize={3}
      swipeAnimationDuration={swipeAnimationDuration}
      animateCardOpacity={animateCardOpacity}
      swipeBackCard
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "relative",
  },
  card: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 4,
    borderWidth: 2,
    padding: 8,
    borderColor: "#E8E8E8",
  },
});

export default Swiper;
