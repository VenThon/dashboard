"use client";

import { createElement, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { loginService } from "@/service/auth.service";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter();

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await loginService.userLogin({
        username,
        password,
      });
      toast.success("Login successful ");
      router.push("/dashboard");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm">
          Enter your credentials to login
        </p>
      </div>

      <div className="grid gap-6">
        {error && <p className="text-center text-sm text-red-500">{error}</p>}

        {/* Username */}
        <div className="grid gap-3">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Password */}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <div
              className="absolute inset-y-0 right-0 flex cursor-pointer items-center p-3"
              onClick={() => setPasswordVisibility(!passwordVisibility)}
            >
              {createElement(passwordVisibility ? EyeOffIcon : EyeIcon, {
                className: "h-4 w-4",
              })}
            </div>
          </div>
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
