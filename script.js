function googlesignin(){
    let but = document.querySelector('#gsignin')
    if(but.innerHTML=='Sign Out'){
        localStorage.acctoken=null
        acctoken=null
        but.innerHTML='<svg style="margin-right: 5px;" width="20px" height="20px" viewBox="0 -20 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M55.5774312,0.518934349 C69.9640298,-1.34690438 84.9125622,1.8555732 97.2260067,9.53169919 C104.176529,13.6289064 109.735855,19.5592184 115.437029,25.1731016 C119.572426,29.2212078 123.664178,33.3184151 127.810486,37.35561 L127.963245,37.7756965 C124.865978,40.8249722 121.351577,46.9222616 117.420043,56.0675647 C109.17447,58.9683238 103.546988,61.8965291 100.537598,64.8521807 C93.8216694,58.3872132 87.3239678,51.6931076 80.6353179,45.1954061 C74.2740081,39.2378157 64.6611197,36.8373215 56.3303135,39.5706115 C46.8429054,42.2384336 39.603233,51.3112108 39.1013114,61.1586929 C38.7739713,66.2815659 40.1106102,71.4862739 42.8820899,75.8071636 C44.6060812,78.5895547 47.1266002,80.7118099 49.3852471,83.0359248 C54.8136375,88.4915936 60.372964,93.821782 65.7195194,99.3538301 C62.8643828,102.159652 59.4836867,107.591131 55.5774312,115.648267 C47.2683739,119.586376 41.5035506,123.167662 38.2829611,126.392125 C31.0651113,119.605273 24.1636903,112.452891 17.0113085,105.58966 C8.49500953,96.7296534 2.79929132,85.2345593 0.835250554,73.1066076 C-1.32519429,60.0948375 0.726137178,46.3956532 6.74919552,34.6495983 C11.8066005,24.8021161 19.4609038,16.2476275 28.7737304,10.2409361 C36.8699429,5.15079715 46.0409221,1.58278976 55.5774312,0.518934349 Z" fill="#EA4335"> </path> <polygon fill="#34A853" points="128.083269 160.779205 190.490665 99.2719951 207.36413 109.294059 217.921767 126.452137 128.083269 215.330437 65.7631648 153.675924 77.7221592 136.846613 93.3633932 126.430314"> </polygon> <polygon fill="#FBBC05" points="100.592154 64.9121931 116.289402 73.4031101 128.083269 92.1687143 65.7631648 153.675924 38.2829611 126.392125"> </polygon> <path d="M203.333309,0.895375496 C221.620711,3.99419537 238.440538,15.4129101 247.660618,31.5671454 C258.16278,49.314436 258.735625,72.3428139 249.417343,90.7065951 C245.55473,98.5954921 239.657152,105.251408 233.377677,111.301745 C228.167513,116.28277 223.219222,121.596592 217.921767,126.452137 C208.756244,117.417549 199.579809,108.388418 190.490665,99.2719951 C196.966543,92.7306482 203.54608,86.2984147 210.043782,79.7788905 C214.233735,75.5452915 216.857912,69.7404599 217.070683,63.7665026 C217.359833,56.9851063 214.6811,50.105508 209.765542,45.4027215 C204.757239,40.6617453 197.741248,37.9666449 190.834372,38.5394901 C184.893148,38.8231849 179.159241,41.5182853 174.969287,45.7191503 C159.33334,61.1914269 143.735583,76.707349 128.083269,92.1687143 C118.879556,83.1232155 109.664932,74.088628 100.592154,64.9121931 C100.581243,64.895826 100.553965,64.8685477 100.537598,64.8521807 C109.703121,55.8503272 118.808632,46.7884613 127.963245,37.7756965 C134.597338,31.2398053 141.209608,24.6766357 147.849157,18.1352889 C156.447291,9.49896517 167.784171,3.84143664 179.628428,1.2445383 C187.43549,-0.223036606 195.488057,-0.38670667 203.333309,0.895375496 Z" fill="#4285F4"> </path> </g> </g></svg> Link Google Fit'
        document.querySelector(`.side-btn[data-index="${currentProjectIndex}"]`).click();
        return
    }
    const client = google.accounts.oauth2.initTokenClient({
      client_id: '46732986109-fjpf0a3jnpmd7qp5o2hqcvscs8hi8emp.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/fitness.activity.read',
      callback: (response) => {
        console.log(response);
        acctoken=response.access_token
        localStorage.acctoken=acctoken
        //changeSignInState()
        let ac = document.createElement('div')
        ac.textContent='Your Access Token is: '
        document.body.appendChild(ac)
        ac = document.createElement('div')
        ac.style.cssText='word-wrap: normal'
        ac.textContent=acctoken
        document.body.appendChild(ac)
      },
    });
    client.requestAccessToken()
  }