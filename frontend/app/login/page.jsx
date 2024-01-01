"use client";
import React, { useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const [error, setError] = useState(false);
  const { push } = useRouter();

  const submitForm = () => {
    const postData = {
      email: formik.values.email,
      password: formik.values.password,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER}user/login`, postData)
      .then((res) => {
        const token = JSON.stringify(res.data.token);
        localStorage.setItem("token", token);
        push("/");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: submitForm,
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required()
        .email("harus berbentuk email")
        .test(
          "min-domain-segments",
          "Email domain harus punya 2 segmen",
          function (value) {
            if (!value) return true;

            const domain = value.split("@")[1];
            const domainSegments = domain?.split(".");

            return domainSegments?.length >= 2;
          }
        ),
      password: yup
        .string()
        .required("password wajib diisi")
        .min(3, "password harus mempunyai karakter lebih dari 3"),
    }),
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <>
      {error && (
        <div className="p-5">
          <div role="alert" className="alert alert-error text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Email atau Kata sandi salah</span>
          </div>
        </div>
      )}
      <Container className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Heading className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight black-text">
            Login Dulu Guys 😁
          </Heading>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* form */}
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={formik.handleSubmit}
          >
            <FormControl>
              <FormLabel
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border py-1.5 px-1.5 bg-white"
                onChange={handleForm}
              />
              <p className="text-sm text-red-500">{formik.errors.email}</p>
            </FormControl>

            <FormControl isInvalid={formik.errors.password}>
              <div className="flex items-center justify-between">
                <FormLabel
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 "
                >
                  Password
                </FormLabel>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 px-1.5 py-1.5 bg-white"
                onChange={handleForm}
              />
              <p className="text-sm text-red-500">{formik.errors.password}</p>
            </FormControl>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md blue-bg p-3 text-white "
              >
                Sign in
              </button>
            </div>
          </form>

          {/* form */}
        </div>
      </Container>
    </>
  );
};

export default page;
