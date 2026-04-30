"use client";

import { createElement, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { LoginInput, loginSchema } from "@/lib/validation/auth";
import { loginService } from "@/service/auth.service";

import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: LoginInput) => {
    setServerError("");
    setLoading(true);

    try {
      await loginService.userLogin({
        username: data.username.trim(),
        password: data.password,
      });

      toast.success("Login successful");
      router.push("/dashboard");
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
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
        <h1 className="text-2xl font-bold">System Login</h1>
        <p className="text-muted-foreground text-sm">
          Please enter your username and password to continue.
        </p>
      </div>

      <div className="grid gap-6">
        {serverError ? (
          <p className="text-center text-sm text-red-500">{serverError}</p>
        ) : null}

        <div className="grid gap-3">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="Enter username"
            autoComplete="username"
            aria-invalid={!!form.formState.errors.username}
            {...form.register("username")}
          />
          {form.formState.errors.username ? (
            <p className="text-sm text-red-500">
              {form.formState.errors.username.message}
            </p>
          ) : null}
        </div>

        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>

            <Link
              href="/auth/forgot-password"
              className="ml-auto text-sm hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <div className="relative">
            <Input
              id="password"
              type={passwordVisibility ? "text" : "password"}
              placeholder="Enter password"
              autoComplete="current-password"
              aria-invalid={!!form.formState.errors.password}
              {...form.register("password")}
            />

            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center p-3"
              onClick={() => setPasswordVisibility((prev) => !prev)}
              aria-label={
                passwordVisibility ? "Hide password" : "Show password"
              }
            >
              {createElement(passwordVisibility ? EyeOffIcon : EyeIcon, {
                className: "h-4 w-4",
              })}
            </button>
          </div>

          {form.formState.errors.password ? (
            <p className="text-sm text-red-500">
              {form.formState.errors.password.message}
            </p>
          ) : null}
        </div>

        <Button
          type="submit"
          className="w-full bg-[#058248]"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </div>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/auth/signup" className="underline">
          Sign up
        </Link>
      </div>
    </form>
  );
}
