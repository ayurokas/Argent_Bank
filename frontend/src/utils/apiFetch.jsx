const APIURL = "http://localhost:3001";

export const getToken = async (user) => {
    const response = await fetch(`${APIURL}/api/v1/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    return response.json();
};

export const getUser = async (token) => {
    const response = await fetch(`${APIURL}/api/v1/user/profile`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    return response.json();
}

export const updateProfile = async (token, firstName, lastName) => {
    const response = await fetch(`${APIURL}/api/v1/user/profile`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            firstName,
            lastName,
        }),
    });
    return response.json();
}