import "@/components/common/blob.css";
import "@/components/upload/upload-header";
import UploadHeader from "@/components/upload/upload-header";
import UploadForm from "@/components/upload/upload-form";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import UploadLimitCheck from "@/components/upload/upload-limit-check";

export const maxDuration = 60;

export default async function Page() {
  const user = await currentUser();
  if (!user?.id) {
    redirect("/sign-in");
  }

  return (
      <section className="min-h-screen">
        <div className="blob"/>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-8">
                <UploadHeader />
                <UploadLimitCheck uploadLimit={10}>
                  <UploadForm />
                </UploadLimitCheck>
            </div>
        </div>
      </section>
    );
}