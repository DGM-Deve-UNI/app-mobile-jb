// // components/NewsCard.tsx
// import React from "react";
// import { Text, View, Image, TouchableOpacity } from "react-native";

// interface NewsCardProps {
//   title: string;
//   description: string;
//   imageUrl: string;
//   onPress: () => void;
// }

// export function NewsCard({
//   title,
//   description,
//   imageUrl,
//   onPress,
// }: NewsCardProps) {
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md mb-4 mx-4"
//     >
//       <Image
//         source={{ uri: imageUrl }}
//         className="h-48 w-full"
//         resizeMode="cover"
//       />
//       <View className="p-4">
//         <Text className="text-lg font-bold text-black dark:text-white mb-1">
//           {title}
//         </Text>
//         <Text className="text-sm text-gray-700 dark:text-gray-300">
//           {description}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

import React from "react";
import { View, Text } from "react-native";

type NewsCardProps = {
  title: string;
  description: string;
};

export function NewsCard({ title, description }: NewsCardProps) {
  return (
    <View className="bg-gray-500 rounded-xl mx-6 my-3 p-4 shadow-md">
      <Text className="text-white font-semibold text-lg">{title}</Text>
      <Text className="text-gray-300 mt-1">{description}</Text>
    </View>
  );
}