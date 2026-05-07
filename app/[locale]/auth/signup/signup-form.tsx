"use client";

import { createElement, useState } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { RegisterInput, registerSchema } from "@/lib/validation/auth";
import { RegisterService } from "@/service/auth.service";

import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter();

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: RegisterInput) => {
    setIsLoading(true);

    try {
      await RegisterService.register({
        username: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });

      toast.success("Account created successfully");

      router.push("/auth/login");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Register failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6", className)}
      noValidate
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Sign Up form </h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="username"
            {...form.register("username")}
          />
          {form.formState.errors.username && (
            <p className="text-sm text-red-500">
              {form.formState.errors.username.message}
            </p>
          )}
        </div>

        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <p className="text-sm text-red-500">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div className="grid gap-3">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={passwordVisibility ? "text" : "password"}
              autoComplete="new-password"
              className="pr-10"
              {...form.register("password")}
            />

            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center p-3"
              onClick={() => setPasswordVisibility((prev) => !prev)}
            >
              {createElement(passwordVisibility ? EyeOffIcon : EyeIcon, {
                className: "h-4 w-4",
              })}
            </button>
          </div>
          {form.formState.errors.password && (
            <p className="text-sm text-red-500">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        <div className="grid gap-3">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={confirmPasswordVisibility ? "text" : "password"}
              autoComplete="new-password"
              className="pr-10"
              {...form.register("confirmPassword")}
            />

            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center p-3"
              onClick={() => setConfirmPasswordVisibility((prev) => !prev)}
            >
              {createElement(confirmPasswordVisibility ? EyeOffIcon : EyeIcon, {
                className: "h-4 w-4",
              })}
            </button>
          </div>
          {form.formState.errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {form.formState.errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-[#058248]"
          disabled={isLoading}
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </Button>
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/auth/login" className="underline">
            Sign In
          </Link>
        </div>
      </div>
    </form>
  );
}
