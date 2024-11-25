"use client";

import { handleSendEmailVerificationCode } from "@/lib/cognitoActions";
import { useFormState, useFormStatus } from "react-dom";

export default function SendVerificationCode() {
  const [response, dispatch] = useFormState(handleSendEmailVerificationCode, {
    message: "",
    errorMessage: "",
  });
  const { pending } = useFormStatus();

  return (
    <>
      <button
        aria-disabled={pending}
        formAction={dispatch}
        className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 mt-4 w-full"
      >
        Resend Verification Code
      </button>
      <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
        {response?.errorMessage && <p className="text-sm text-red-500">{response.errorMessage}</p>}
        {response?.message && <p className="text-sm text-green-500">{response.message}</p>}
      </div>
    </>
  );
}
