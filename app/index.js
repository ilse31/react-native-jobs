import { View, ScrollView, SafeAreaView, Text, Platform } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import React, { useState } from "react";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              onPress={() => {}}
              dimension='60%'
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              onPress={() => {}}
              dimension='60%'
            />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          padding: SIZES.medium,
          flex: 1,
          backgroundColor: COLORS.lightWhite,
        }}
        contentContainerStyle={{
          paddingBottom: SIZES.padding,
        }}
      >
        <View>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
