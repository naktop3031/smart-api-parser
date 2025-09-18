"use client";

import * as React from "react";
import {useForm} from "react-hook-form";
import {TextInput} from "./form/TextInput";
import {SelectInput} from "./form/SelectInput";
import Box from "@mui/material/Box";
import {useState, useRef} from "react";

export const NecessaryStepsForm = () => {
  const {register, handleSubmit} = useForm({
    defaultValues: {
      webUrl: "https://orgfarm-803648dab5-dev-ed.develop.my.salesforce.com/",
      docsUrl:
        "https://orgfarm-803648dab5-dev-ed.develop.my.salesforce.com/docs",
      authType: "oauth2",
      clientId: "",
      clientSecret: "",
      username: "",
      password: "",
    },
  });

  const [userToken, setUserToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const tokenSectionRef = useRef<HTMLDivElement>(null);

  const onSubmit = async (data: any) => {
    setLoading(true);
    setUserToken(null);

    try {
      const response = await fetch("/api/get-token", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.access_token) {
        setUserToken(result.access_token);

        // scroll to the token section smoothly
        tokenSectionRef.current?.scrollIntoView({behavior: "smooth"});
      } else {
        setUserToken("Failed to retrieve token");
      }
    } catch (err) {
      console.error(err);
      setUserToken("Error retrieving token");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="min-h-80">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white rounded-2xl shadow mt-8"
      >
        <TextInput
          placeholder="URL adresa webu...*"
          name="webUrl"
          register={register}
          validation={{required: true}}
        />
        <TextInput
          placeholder="URL adresa dokumentace"
          name="docsUrl"
          register={register}
          validation={{minLength: 2}}
        />
        <SelectInput
          name="authType"
          register={register}
          options={[
            {label: "Auth type...*", value: ""},
            {label: "OAuth 2.0", value: "oauth2"},
            {label: "OAuth 1.0", value: "oauth1"},
          ]}
        />
        <TextInput
          placeholder="Client ID"
          name="clientId"
          register={register}
          validation={{minLength: 2}}
        />
        <TextInput
          placeholder="Client Secret"
          name="clientSecret"
          register={register}
          validation={{minLength: 2}}
        />
        <TextInput
          placeholder="Username"
          name="username"
          register={register}
          validation={{minLength: 2}}
        />
        <TextInput
          placeholder="Password"
          type="password"
          name="password"
          register={register}
          validation={{minLength: 2}}
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-neutral-900 text-white py-2 text-sm font-medium hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors cursor-pointer"
        >
          Submit
        </button>
      </form>

      <Box
        ref={tokenSectionRef}
        component="section"
        className="mt-20 mb-120 max-w-md mx-auto p-4 transition-all"
      >
        {loading ? (
          <p className="text-center">Loading token...</p>
        ) : (
          userToken && (
            <Box>
              <b className="pl-2">User's token:</b>
              <Box className="bg-neutral-100 rounded-xl shadow p-4">
                <Box>
                  <p className="break-words">{userToken}</p>)
                </Box>
              </Box>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};
