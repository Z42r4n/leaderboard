import { Text, View, Image } from "react-native";
import Animated, { FadeInRight } from "react-native-reanimated";

const users = [
  { name: "Zaran", score: "12" },
  { name: "Yassen", score: "22" },
  { name: "Billal", score: "4" },
  { name: "Ahmed", score: "30" },
  { name: "Mariam", score: "50" },
  { name: "Fatima", score: "7" },
  { name: "Loubna", score: "10" },
];

type PlaceProps = {
  user: (typeof users)[0];
  index: number;
};

function Place({ user, index }: PlaceProps) {
  return (
    <Animated.View
      entering={FadeInRight.delay(index * _stagger)
        .springify()
        .damping(80)
        .stiffness(200)}
    >
      <View
        style={{
          width: _avatarSize,
          aspectRatio: 1,
        }}
      >
        <Image
          source={{ uri: `https://i.pravatar.cc/150?u=user_${user.name}` }}
          style={{
            flex: 1,
            borderRadius: _avatarSize,
          }}
        />
      </View>
    </Animated.View>
  );
}

const _avatarSize = 33;
const _spacing = 7;
const _stagger = 100;

export default function Leaderboard() {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: _spacing,
      }}
    >
      {users.map((user, index) => (
        <Place key={index} user={user} index={index} />
      ))}
    </View>
  );
}
