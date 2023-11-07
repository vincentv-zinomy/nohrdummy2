import React, { createContext, useContext, useEffect, useState } from "react";
import Spinner from "../common/Spinner";

export enum RoleTypes {
  ADMIN = "ADMIN",
  TEAM_MEMBER = "TEAM_MEMBER",
  INTERVIEWER = "INTERVIEWER",
}
export const rolePriority = [
  RoleTypes.ADMIN,
  RoleTypes.TEAM_MEMBER,
  RoleTypes.INTERVIEWER,
  // Add more roles in the desired priority order
];

interface User {
  // You can add fields according to your requirements
  email: string;
  fullName: string;
  image: string;
  email_verified: boolean;
  timezone: string;
  _id: string;
}
export interface OrgLevelData {
  org_id: string;
  roles: RoleTypes[];
  onboarding_completed: boolean;
  waitlist_approved: boolean;
  org_name: string;
  is_account_paid?: boolean;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  all_orgs: OrgLevelData[];
  current_org: OrgLevelData | null;
  isLoading: boolean;
}

interface AuthContextType {
  authState: AuthState;
  triggerAuth: () => void;
  handleOrgChange: (org_id: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({
  authState: {
    isAuthenticated: false,
    user: null,
    isLoading: false,
    all_orgs: [],
    current_org: null,
  },
  triggerAuth: () => { },
  handleOrgChange: (org_id: string) => { },
  signOut: () => { },
});

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    isLoading: true,
    current_org: null,
    all_orgs: [],
  });

  const signOut = () => {
    // localStorage.removeItem(LocalStorageKeys.ACCESS_TOKEN);
    // localStorage.removeItem(LocalStorageKeys.PAYLOAD_DATA);
    // localStorage.removeItem(LocalStorageKeys.CURRENT_ORG_ID);
    // localStorage.removeItem(LocalStorageKeys.CURRENT_STEP);
    // localStorage.removeItem(LocalStorageKeys.ONBOARDING_DATA);
    // window.location.href = "/signin";
  };
  const handleOrgChange = async (org_id: string) => {
    // localStorage.setItem(LocalStorageKeys.CURRENT_ORG_ID, org_id);
    // localStorage.setItem(LocalStorageKeys.CURRENT_STEP, "1");
    // localStorage.setItem(LocalStorageKeys.ONBOARDING_DATA, JSON.stringify({}));
    // window.location.reload();
  };
  const getAuthData = async (org_id?: string) => {
    // const token = localStorage.getItem( );
    // const prePayload = localStorage.getItem(LocalStorageKeys.PAYLOAD_DATA);
    // const payload: jwtPayload = prePayload ? JSON.parse(prePayload) : null;
    // const selectedOrgId = localStorage.getItem(LocalStorageKeys.CURRENT_ORG_ID);

    // if (token && payload && selectedOrgId) {
    //   let selectedOrg = selectedOrgId ? selectedOrgId : undefined;

    //   let findOrgData: OrgLevelData | undefined = payload.orgs.find(
    //     (org_: OrgLevelData) => org_.org_id === selectedOrg
    //   );
    //   let access_roles = findOrgData ? findOrgData.roles : [];
    //   if (access_roles.length === 0) {
    //     access_roles = [];
    //   }


    //   axios
    //     .get(`${process.env.NEXT_PUBLIC_API_URL}/users/verify-token`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`, // assuming the server expects a Bearer token
    //         "x-org-id": selectedOrg,
    //       },
    //     })
    //     .then((response) => {

    //       const user: User = response.data.user;
    //       const org_data: OrgLevelData[] = response.data.orgsAndRoles
    //         ? response.data.orgsAndRoles
    //         : [];
    //       const getLatestOrgData = org_data.find(
    //         (org: OrgLevelData) => org.org_id === selectedOrg
    //       );

    //       try {
    //         window.$crisp.push(["set", "user:nickname", [`${user.fullName}`]]);
    //         window.$crisp.push(["set", "user:email", [`${user.email}`]]);
    //       } catch (e) {
    //         console.log(e);
    //       }
    //       posthog.identify(user._id, {
    //         name: user.fullName,
    //         email: user.email,
    //         onboarding_completed: findOrgData
    //           ? findOrgData.onboarding_completed
    //           : false,
    //       });
    //       setAuthState({
    //         isAuthenticated: true,
    //         user,
    //         isLoading: false,
    //         current_org: getLatestOrgData ? getLatestOrgData : null,
    //         all_orgs: org_data,
    //       });
    //     })
    //     .catch((error) => {
    //       // Token verification failed
    //       setAuthState({
    //         isAuthenticated: false,
    //         user: null,
    //         isLoading: false,
    //         all_orgs: [],
    //         current_org: null,
    //       });
    //     });
    // } else {
    //   // No token in local storage
    //   setAuthState({
    //     isAuthenticated: false,
    //     user: null,
    //     isLoading: false,
    //     current_org: null,
    //     all_orgs: [],
    //   });
    // }
  };
  useEffect(() => {
    getAuthData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ authState, triggerAuth: getAuthData, signOut, handleOrgChange }}
    >
      {authState.isLoading ? (
        <div className="text-center">
          <Spinner color="text-green-500" />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
