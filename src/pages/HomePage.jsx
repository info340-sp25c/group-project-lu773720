import React from "react";
// import { HomeLayout } from "../components/HomeLayout";
//import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { ProfileWindow } from "../components/ProfileWindow"
export function HomePage() {

  return (
  <>
    <header>
      <ProfileWindow />
      <SearchBar title="Discover New Music"/>
    </header>
    
    <section id="past-recs" class="pastSearchCard">
        <div id="input-songs" class="songlist">
            <h2>Songs You Referenced</h2>
            <ul class="songlist">
                <li class="song">Hello by Adele</li>
                <li class="song">Movies by Conan Gray</li>
                <li class="song">Hello by Adele</li>
                <li class="song">Movies by Conan Gray</li>
                <li class="song">Hello by Adele</li>
                <li class="song">Movies by Conan Gray</li>
            </ul>
        </div>

        <div id="song-recommendations" class="album-grid">
            <h2>Suggested New Music</h2>
            <div class="album">
                <img src="img/stickseason-noah-kahan copy.jpeg" alt="Stick Season Noah Kahan album cover"/>
                <div>
                    <p class="album-title">Call Your Mom</p>
                    <p class="album-artist">Noah Kahan</p>
                </div>
            </div>

            <div class="album">
                <img src="img/kidkrow-conan-gray copy.jpg" alt="Kid Krow Conan Gray album cover"/>
                <div>
                    <p class="album-title">Little League</p>
                    <p class="album-artist">Conan Gray</p>
                </div>
            </div>

            <div class="album">
                <img src="img/melodrama-lorde copy.jpeg" alt="Melodrama Lorde album cover"/>
                <div>
                    <p class="album-title">Green Light</p>
                    <p class="album-artist">Lorde</p>
                </div>
            </div>

            <div class="album">
                <img src="img/pureheroine-lorde copy.jpeg" alt="Pure Heroine Lorde album cover"/>
                <div>
                    <p class="album-title">Royals</p>
                    <p class="album-artist">Lorde</p>
                </div>
            </div>

            <div class="album">
                <img src="img/hozier-hozier copy.jpeg" alt="Hozier Hozier album cover"/>
                <div>
                    <p class="album-title">Take Me to Church</p>
                    <p class="album-artist">Hozier</p>
                </div>
            </div>

            <div class="album">
                <img src="img/kidkrow-conan-gray copy.jpg" alt="Kid Krow Conan Gray album cover"/>
                <div>
                    <p class="album-title">Jigsaw</p>
                    <p class="album-artist">Conan Gray</p>
                </div>
            </div>

        </div>
    </section>

  </>
  );

  

}
