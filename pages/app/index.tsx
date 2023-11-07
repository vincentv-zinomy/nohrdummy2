import Spinner from "@/components/common/Spinner";
import { useAuth } from "@/components/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AppIndexPage() {
  const router = useRouter();

  const { authState } = useAuth();



  useEffect(() => {
    if (authState.isAuthenticated) {
      router.push("/app/jobs");
    }
  }, [authState]);
  return (
    <div>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Replace with your content */}
          <main className="flex-1">
            <Spinner color="text-indigo-500" />
          </main>
          {/* /End replace */}
        </div>
      </div>
    </div>
  );
}

export default AppIndexPage;
