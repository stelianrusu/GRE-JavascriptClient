/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */
const msalConfig = {
    auth: {
        clientId: "c9418383-0729-40be-bae9-e62216e32e28",
        authority: "https://login.microsoftonline.com/e8a64aeb-fc47-4028-996f-bd40b2c43782",
        redirectUri: "https://gre-javascriptclient.azurewebsites.net/",
        //redirectUri: "http://localhost:3000/",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {		
                    case msal.LogLevel.Error:		
                        console.error(message);		
                        return;		
                    case msal.LogLevel.Info:		
                        console.info(message);		
                        return;		
                    case msal.LogLevel.Verbose:		
                        console.debug(message);		
                        return;		
                    case msal.LogLevel.Warning:		
                        console.warn(message);		
                        return;		
                }	
            }	
        }	
    }
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
const loginRequest = {
    scopes: ["User.Read"]
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
const tokenRequest = {
    scopes: ["User.Read", "Mail.Read"],
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};

const readPortfolioRequest = {
    scopes: ["api://72637191-1a55-4146-ac48-66e3a8721bbe/Portfolio.Read"],
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};

const readPortfolioBalanceRequest = {
    scopes: ["api://72637191-1a55-4146-ac48-66e3a8721bbe/PortfolioBalance.Read"],
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};

const readNonExistingRequest = {
    scopes: ["api://72637191-1a55-4146-ac48-66e3a8721bbe/NonExisting.Read"],
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};

const readAdministratorRequest = {
    scopes: ["api://72637191-1a55-4146-ac48-66e3a8721bbe/Administrator.Read"],
    forceRefresh: true // Set this to "true" to skip a cached token and go to the server to get a new token
};

