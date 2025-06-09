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

export async function getThumbnailUrlFromTrackUrl(trackUrl) {
  const cacheKey = `thumbCache:${trackUrl}`;
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    return cached;
  }

  const response = await fetch(`https://open.spotify.com/oembed?url=${trackUrl}`);
  if (response.status !== 200) return;

  const data = await response.json();
  const thumbnail = data['thumbnail_url'];

  localStorage.setItem(cacheKey, thumbnail);

  return thumbnail;
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
    return data['content'];
}

//console.log(await searchArtist('Magdalena Bay'));
//console.log(await getTracksFromArtist('d5a22347-959c-4f21-9a56-7c7bab00c249'));
// console.log(await getRecommendation([
//     '7cbd653a-c629-4ab7-96a7-22476df094c6',
//     '6cce02d9-c490-455c-9285-268cb3ec6c3f',
//     '88c9ac18-c3ce-4047-bc38-e921aec09152',
//     '0a5d7fb9-008c-4730-a17e-565702eeb9a9',
//     '2f8b3f6a-729f-4fcb-b886-899fa628f06e'
// ], [moodList['happy'], moodList['energetic']]));
// console.log(await getThumbnailUrlFromTrackUrl("https://open.spotify.com/track/2hGchv7KYaINz9Z1qzufNm"));



//console.log(await searchArtist('Sabrina Carpenter')); 
//console.log(await getTracksFromArtist('c07149cc-50c1-48b4-8487-ffa71f721e94'));
//console.log(await getRecommendation(['1c67d093-9775-4eb5-87f1-2d66c00f71f4'], [moodList['happy'], moodList['energetic'], moodList['epic']]));