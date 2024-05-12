export async function loadNextPage(page, cityId, serviceId) {
    const url = new URL("https://bot-dev-domain.com:1444/masters/bot");
    url.searchParams.set("page", String(page));
    url.searchParams.set("limit", String(6));
    url.searchParams.set("city_id", cityId);
    url.searchParams.set("service_id", serviceId);

    let response = await fetch(url.toString());
    if (!response.ok) {
        console.error("Error has occured during request GET ", url, response.status);
        throw response.error;
    }

    let data = await response.json()
    if (data.length === 0) {
        return;
    }

    return data;
}