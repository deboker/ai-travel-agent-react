import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPEN_AI_KEY,
    dangerouslyAllowBrowser: true
});

export const constructWeatherFromAI = async (weather) => {
    const weatherMessages = [
        {
            role: "system",
            content: `
                You are a helpful AI Travel Agent. The highest and lowest temperature and the weather condition of the locations are now provided. All you have to do is to construct a short paragraph about the weather condition of the destination, and clothing advice for the weather conditions. Provide your shortest answer around 1-3 sentence only.
            `
        }
    ]

    weatherMessages.push(
        {
            role: "user",
            content: `Lowest Temperature in Celsius: ${weather.main.temp_min}, Highest Temperature in Celsius: ${weather.main.temp_max}, Weather Condition: ${weather.weather[0].description}, Location: ${weather.name}`
        }
    )
    
    const { choices } = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: weatherMessages,
        temperature: 0.65,
        frequency_penalty: 0.5
    })
    return choices[0].message.content
};

export const constructFlightFromAI = async (flightData) => {
    const flightMessages = [
        {
            role: "system",
            content: `
                You are a helpful AI Travel Agent. The user will be giving two locations which is the origin and the destination. As well as the flight dates which is the date from, date to, and the budget of the traveller. All you have to do is to suggest the name of the airline that is suitable for the scheduled flights and how to transport from the origin to the destinations as well as their budgets. Provide your shortest answer around 1-3 sentence only. 
            `
        }
    ]

    flightMessages.push(
        {
            role: "user",
            content: `Origin: ${flightData.flyingFrom}, Destination: ${flightData.flyingTo}, Date From: ${flightData.fromDate}, Date To: ${flightData.toDate}, Budget: ${flightData.budget}`
        }
    )
    
    const { choices } = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: flightMessages,
        temperature: 0.65,
        frequency_penalty: 0.5
    })
    return choices[0].message.content
}

export const constructAccommodationFromAI = async (accommodationData) => {
    const hotelMessages = [
        {
            role: "system",
            content: `
                You are a helpful AI Travel Agent. Provide the your suggested hotel accommodation based on the destination, the budget, the number of the travelers. Provide your shortest answer around 1-3 sentence only. 
            `
        }
    ]

    hotelMessages.push(
        {
            role: "user",
            content: `Destination: ${accommodationData.flyingTo}, Date From: ${accommodationData.fromDate}, Date To: ${accommodationData.toDate}, Budget: ${accommodationData.budget}, Number of Travelers: ${accommodationData.numberOfTravellers}`
        }
    )
    
    const { choices } = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: hotelMessages,
        temperature: 0.65,
        frequency_penalty: 0.5
    })
    return choices[0].message.content
}

export const constructActivitiesFromAI = async (activitiesData, weather) => {
    const activityMessages = [
        {
            role: "system",
            content: `
                You are a helpful AI Travel Agent. The user will provide all the details that you may need like the weather conditions, number of travelers, dates, destinations, and budgets. All you need to do is to provide 2-3 activities that are suitable to all their inputs such as food trips, museum visits, outdoor adventures etc. 
            `
        }
    ]

    activityMessages.push(
        {
            role: "user",
            content: `Destination: ${activitiesData.flyingTo}, Date From: ${activitiesData.fromDate}, Date To: ${activitiesData.toDate}, Budget: ${activitiesData.budget}, Number of Travelers: ${activitiesData.numberOfTravellers}, Weather Conditions: ${weather.weather[0].description}`
        }
    )
    
    const { choices } = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: activityMessages,
        temperature: 0.65,
        frequency_penalty: 0.5
    })
    return choices[0].message.content
}