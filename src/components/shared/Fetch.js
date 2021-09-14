export default async function FetchData(url, method, email, password, proc) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        email: email,
        password: password,
        procedure: proc,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return { status: true, response_Data: data };
    } else {
      return { status: false, response_Data: {} };
    }
  } catch (e) {
    return { status: false, response_Data: {} };
  }
}
