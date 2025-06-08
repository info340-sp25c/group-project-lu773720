import moodList from './moods.js';

export async function searchArtist(artistName, pageNumber = 0) {
    const response = await fetch(`https://api.reccobeats.com/v1/artist/search?page=${pageNumber}&searchText=${encodeURIComponent(artistName)}`);
    
    if (response.status !== 200) return;
    
    const data = await response.json();
    return data['content'];
}

export async function getTracksFromArtist(artistId, pageNumber = 0) {
    const response = await fetch(`https://api.reccobeats.com/v1/artist/${encodeURIComponent(artistId)}/track?page=${pageNumber}&size=40`);
    
    if (response.status !== 200) return;
    
    const data = await response.json();
    return data['content'];
}

export async function getRecommendation(songIds, moods, numRecs = 10) {
    // Combines the paramters of all the provided moods into one. For most paramters, they're all multiplied togehter
    // (since they're already normalized on a scale of 0-1). For the few exceptions, they're handled differently.
    const parameters = {};

    if (moods.length > 0) {
        const totals = {};
        for (const mood of moods) {
            console.log(mood);
            for (let [parameter, value] of Object.entries(mood)) {
                totals[parameter] = totals[parameter] || 0;
                if (parameter == 'mode') {
                    totals['mode'] += value + 1;
                } else if (parameter == 'loudness') {
                    // For loudness value in dB you can't just multiply, so this converts it to linear space, averages,
                    // and then back into the decibel scale.
                    // https://3roam.com/linear-to-db-calculator
                    totals['loudness'] += Math.pow(10, value / 10);
                    continue;
                } else {
                    if (parameter == 'tempo') value = value / 250;
                    
                    totals[parameter] += value;
                }
            }
        }

        parameters['loudness'] = 10 * Math.log10(totals['loudness'] / moods.length);
        parameters['mode'] = Math.round(totals['mode'] / moods.length) - 1;
        parameters['tempo'] = (totals['tempo'] * 250) / moods.length;
        parameters['popularity'] = 100;
        delete totals['loudness'];
        delete totals['mode'];
        delete totals['tempo'];

        for (const key in totals) {
            parameters[key] = totals[key] / moods.length;
        };
    }
    
    console.log(parameters);

    let parameterURLComponent = new URLSearchParams(parameters).toString();
    const response = await fetch(`https://api.reccobeats.com/v1/track/recommendation?size=${numRecs}&seeds=${songIds.join(',')}&${parameterURLComponent}`);

    if (response.status !== 200) return;
    
    const data = await response.json();
    return data;
}

//console.log(await searchArtist('Justice', 1)); //<-- comes up with a lot of random results, I had to find their ID in page 2 (id 1)
//console.log(await getTracksFromArtist('fca8c382-704f-42df-84c8-7777ce840045')); //<-- get a random song from Justice
//console.log(await getRecommendation(['1c67d093-9775-4eb5-87f1-2d66c00f71f4'], [moodList['happy'], moodList['energetic'], moodList['epic']]));