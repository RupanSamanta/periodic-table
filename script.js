document.onreadystatechange = ()=> {
  if (document.readyState === "complete") {
    $('.atom-orbits').css({
      'border-right': 'solid 3px transparent',
      'border-bottom': 'solid 3px transparent'
    });
    setTimeout(()=> {
      $('.atom-orbits').css({
        'border-color': 'cadetblue'
      });
      setTimeout(()=> {
        $('.atom-orbits').css({
          'opacity': 0
        });
        $('#atom-nucleus').css({
          'box-shadow': 'none',
          'animation': 'none'
        });
        setTimeout(()=> {
          $('#atom-nucleus').css({
          'border-radius': 0,
          'width': window.innerWidth+'px',
          'height': window.innerHeight+'px'
          });
          setTimeout(()=> {
            $('#atom-body').css({
              'opacity': 0
            });
            $('main').css({
              'display': 'block'
            });
            setTimeout(()=> {
              setUniv();
              $('#atom-body').css({
                'display': 'none'
              });
              $('main').css({
                'opacity': 1
              });
            }, 1050);
          }, 1050);
        }, 750);
      }, 1000);
    }, 2000);
  }
}
function setUniv() {
  const data = JSON.parse(elements);
  for (let i=1; i<=18; i++)
    $('#periodic-table').append(
      `<button class="group">${i}</button>`
    );
  $('.group').eq(0).css({
    'grid-column': '2 / 3',
    'color': '#101318',
    'background': 'darkgrey'
  });
  for (let i=1; i<=7; i++)
    $('#periodic-table').append(
      `<button class="period">${i}</button>`
    );
  $('.period').eq(0).css({
    'color': '#101318',
    'background': 'darkgrey'
  });
  $('#other-non-metal').css({
    'background-color': $('#element-details').css('background-color'),
    'border-color': `var(--otherNonMetal)`,
    'font-weight': 800,
    'color': `var(--otherNonMetal)`
  });
  displayBlock(data);
  $('.element').eq(0).css('border-style', 'dashed');
  $('.element').each((i, e)=> {
    $(e).click(()=> displayDetails(data, e));
  });
  $('#element-type button').each((i, e)=> {
    $(e).click(()=> displayMatch(data, e));
  });
  $('#element-details').click(()=> {
    activeCurrentElement(data);
  });
  $('#element-details').on('dblclick', ()=> {
    let clip = new Audio ('assests/audio/sound2.mp3');
    clip.play();
    additionalDetails(
      data[$('#element-details .atomic-number').text()-1]
    );
    $('body').css('overflow-y', 'hidden');
  });
  $('.element').each((i, e)=> {
    $(e).on('dblclick', ()=> {
    let clip = new Audio ('assests/audio/sound2.mp3');
    clip.play();
      additionalDetails(data[$('#element-details .atomic-number').text()-1]);      
      $('body').css('overflow-y', 'hidden');
    });
  });
  $('#return').click(()=> {
    $('#additional-details').css({
      'left': -150+'%',
      'visibility': 'hidden'
     });
     $('body').css('overflow-y', 'scroll');
     $('meta[name=theme-color]').attr('content', $('body').css('background-color'));
  });
  $('.group').each((i, e)=> {
    $(e).click(()=> activeGroup(data, e));
  });
  $('.period').each((i, e)=> {
    $(e).click(()=> activePeriod(data, e));
  });
  $('.group, .period').click(()=> {
    $('#element-type button').each((i, v)=> {
     $(v).css({
      'background-color': 'transparent',
      'border-color': 'transparent',
      'font-weight': 500,
      'color': `var(--${$(v).attr('id').split('-').reduce((a, b)=> {
      return a + b[0].toUpperCase() + b.substring(1, b.length)})})`
      });
    });
  });
  var mct = 0;
  $('#menu').click(()=> {
    $('#menu-list').css("margin-bottom", $('#bar-box').css('height'));
    if (mct % 2 == 0) {
      mct = 1;
      $('#menu-list').css('display', 'flex');
    }
    else {
       mct = 0;
      $('#menu-list').css('display', 'none');
    }
  });
  $('#fullscreen').click(()=> {
    $('#menu').click();
    if ($('#fullscreen i').attr('class') ==  'fa-solid fa-expand') {
      fullscreen(true);
      $('#fullscreen i').attr('class', 'fa-solid fa-compress');
      $('#fullscreen span').text('Compress');
    }
    else {
      fullscreen(false);
      $('#fullscreen i').attr('class', 'fa-solid fa-expand');
      $('#fullscreen span').text('Fullscreen');
    }
  });
  $('#search').click(()=> {
    $('#bar-box').css('display', 'none');
    $('#wrapper').css('display', 'none');
    $('meta[name=theme-color]').attr('content', '#2f2f2f');
    $('#search-area').css({
      'left': 0,
      'visibility': 'visible'
    });
    $('#search-bar').val(null);
    searchResult(data, '');
  });
  $('#return-back').click(()=>{
    $('#search-area').css({
      'left': -150+'%',
      'visibility': 'hidden'
     });
     if ($('#additional-details').css('visibility') == 'hidden')
     $('meta[name=theme-color]').attr('content', '#101318');
     $('#bar-box').css('display', 'flex');
     $('#wrapper').css('display', 'block');
  });
  $('#search-bar').on('input', ()=> {
    searchResult(data, $('#search-bar').val());
  });
  $('#feedback').click(()=> {
    window.open(
      'mailto: rvsjan32@gmail.com?subject=Feedback on Periodic Table',
      '_blank'
    );
  });
  $('#help').click(()=> {
    window.open('https://github.com/RupanSamanta/periodic-table/blob/main/README.md#features');
  });
  $('.element, #element-details').click(()=> {
      let clip = new Audio ('assests/audio/sound1.mp3');
      clip.play();
  });
  $('#element-type button, .group, .period, .result').click(()=> {
    let clip = new Audio ('assests/audio/sound2.mp3');
    clip.play();
  });
  $('nav button, #search-options button').click(()=> {
      let clip = new Audio ('assests/audio/sound3.mp3');
      clip.play();
  });
}

function createElementBlock(obj) {
  let btn = document.createElement('button'),
  span = document.createElement('span');
  span.setAttribute('class', 'atomic-number');
  span.innerText = obj['atomic number'];
  btn.appendChild(span);
  span = document.createElement('span');
  span.setAttribute('class', 'name');
  let sname = document.createElement('span'),
  fname = document.createElement('span');
  sname.innerText = obj.name.short;
  sname.setAttribute('class', 'short-name');
  fname.innerText = obj.name.full;
  fname.setAttribute('class', 'full-name');
  span.appendChild(sname);
  span.appendChild(fname);
  btn.appendChild(span);
  span = document.createElement('span');
  span.setAttribute('class', 'mass-number');
  let weight = obj['atomic weight'];
  span.innerText = typeof weight == "string" ? 
        weight : parseFloat(weight.toFixed(3));
  btn.appendChild(span);
  btn.setAttribute('id', obj["atomic number"]);
  btn.setAttribute('name', obj.name.full.toLowerCase());
  btn.setAttribute('class',
    obj.type.replaceAll(' ', '-').toLowerCase() + ' element'
  );
  $('#periodic-table').append(btn);
  $('#'+obj["atomic number"]).css(
    'grid-area', `${obj.position.period*1 + 1} / ${obj.position.group*1 + 1} / ${obj.position.period*1 + 2} / ${obj.position.group*1 + 2}`
  );
}

function displayBlock(data) {
  for (let i = 0; i < data.length; i++)
    if (!((i>55 && i<71) || (i>87 && i<103)))
      createElementBlock(data[i]);
  $('#periodic-table').append(
      `<button class="lanthanoid other">
        <span class="name">
          <span>La-Lu</span>
          <span>57-71</span>
        </span>
      </button>`
   )
   $('#periodic-table .other').eq(0).css(
     'grid-area', '7 / 4 / 8 / 5'
   );
   $('#periodic-table').append(
      `<button class="actinoid other">
        <span class="name">
          <span>Ac-Lr</span>
          <span>89-103</span>
        </span>
      </button>`
   )
   $('#periodic-table .other').eq(1).css(
     'grid-area', '8 / 4 / 9 / 5'
   );
  for (let i=56, j=5; i<103; i++) {
    j = (i == 88) ? 5 : j;
    if (i<=70 || i>= 88)
    $('#lanthanoid-actinoid').append(
      `<button id="${data[i]["atomic number"]}" class="${i >=88 ? "actinoid" : "lanthanoid"} element" name="${data[i].name.full.toLowerCase()}" style="grid-column: ${j} / ${j++}">
        <span class="atomic-number">
          ${data[i]["atomic number"]}
        </span>
        <span class="name">
          <span class="short-name">
            ${data[i].name.short}
          </span>
          <span class="full-name">
            ${data[i].name.full}
          </span>
        </span>
        <span class="mass-number">
          ${data[i]["atomic weight"]}
        </span>
       </button>`
    );
  }
}

function displayDetails(data, e) {
  $(`[name=${$('#element-details .full-name').text().toLowerCase()}]`).css('border-style', 'ridge');
  $(e).css('border-style', 'dashed');
  let obj = data[$(e).attr('id') - 1];
  $('#element-details .atomic-number').text(obj["atomic number"]);
  $('#element-details .short-name').text(obj.name.short);
  $('#element-details .full-name').text(obj.name.full);
  $('#element-details .mass-number').text(obj["atomic weight"]);
  $('#element-details .configuration').text(
    obj["electrons per shell"].split(" ").map((v)=>{
  return v.substring(1, v.length)
}).join("-")
  );
  let color = $(e).css('color');
  $('#element-details').css({
    'border-color': color,
    'color': color,
    'background': color.substring(0, color.length-1) + ', 0.06)'
  });
  $('.group').each((i, v)=>{
    if (i == obj.position.group - 1)
      $(v).css({
        'color': '#101318',
        'background': 'darkgrey'
      });
    else
      $(v).css({
        'color': 'darkgrey',
        'background': 'transparent'
      });
  });
  $('.period').each((i, v)=>{
    if (i == obj.position.period - 1)
      $(v).css({
        'color': '#101318',
        'background': 'darkgrey'
      });
    else
      $(v).css({
        'color': 'darkgrey',
        'background': 'transparent'
      });
  });
   $('#element-type button').each((i, v)=> {
    let id = $(v).attr('id');
    id = id.split('-').reduce((a, b)=> {
      return a + b[0].toUpperCase() + b.substring(1, b.length);
    });
    if ($(v).attr('id') == $(e).attr('class').split(' ')[0])
    $(v).css({
      'background-color': $('#element-details').css('background-color'),
      'border-color': `var(--${id})`,
      'font-weight': 800,
      'color': `var(--${id})`
    });
    else
      $(v).css({
      'background-color': 'transparent',
      'border-color': 'transparent',
      'font-weight': 500,
      'color': `var(--${id})`
    });
  });
  $('.element, .other, #element-details').css('opacity', 1);
}

function displayMatch(data, e) {
  $(`[name=${$('#element-details .full-name').text().toLowerCase()}]`).css('border-style', 'ridge');
  let id = $(e).attr('id');
  $('#element-type button').each((i, v)=> {
   let temp = $(v).attr('id').split('-').reduce((a, b)=> {
      return a + b[0].toUpperCase() + b.substring(1, b.length);
    });
    $(v).css({
      'background-color': 'transparent',
      'border-color': 'transparent',
      'font-weight': 500,
      'color': `var(--${temp})`
    });
  });
  let temp = id.split('-').reduce((a, b)=> {
    return a + b[0].toUpperCase() + b.substring(1, b.length);
  });
  $(e).css({
    'background-color': `var(--${temp})`,
    'border-color': `var(--${temp})`,
    'font-weight': 800,
    'color': '#101318'
  });
  $('.element').each((i, v)=> {
    if ($(v).attr('class').split(' ')[0] == id)
      $(v).css('opacity', 1);
    else
      $(v).css('opacity', 0.3);
  });
  $('.other, #element-details').css('opacity', 0.3);
  $('.group, .period').css({
    'color': 'darkgrey',
    'background-color': 'transparent'
  });
}
function activeGroup(data, e) {
  $(`[name=${$('#element-details .full-name').text().toLowerCase()}]`).css('border-style', 'ridge');
  let grp = $(e).text();
  $('.period').css({
    'color': 'darkgrey',
    'background-color': 'transparent'
  });
  $('.group').each((i, v)=> {
    if (Number($(v).text()) == grp)
      $(v).css({
        'color': '#101318',
        'background': 'darkgrey'
      });
    else
      $(v).css({
        'color': 'darkgrey',
        'background': 'transparent'
      });
  });
  $('.element').css('opacity', 0.3);
  $('.element').each((i, v)=> {
    if (data[i].position.group == grp)
      $(`button[name=${data[i].name.full.toLowerCase()}]`).css('opacity', 1);
  });
  $('.other, #element-details').css('opacity', 0.3);
}

function activePeriod(data, e) {
  $(`[name=${$('#element-details .full-name').text().toLowerCase()}]`).css('border-style', 'ridge');
  let per = $(e).text();
  $('.group').css({
    'color': 'darkgrey',
    'background-color': 'transparent'
  });
  $('.period').each((i, v)=> {
    if (i == per - 1)
      $(v).css({
        'color': '#101318',
        'background': 'darkgrey'
      });
    else
      $(v).css({
        'color': 'darkgrey',
        'background': 'transparent'
      });
  });
  $('.element').css('opacity', 0.3);
  $('.element').each((i, v)=> {
    if (data[i].position.period == per)
      $(`button[name=${data[i].name.full.toLowerCase()}]`).css('opacity', 1);
  });
  $('.other, #element-details').css('opacity', 0.3);
}
function activeCurrentElement(data) {
  $('.element, .other, #element-details').css('opacity', 1);
  $('#element-type button').each((i, v)=> {
   let temp = $(v).attr('id').split('-').reduce((a, b)=> {
      return a + b[0].toUpperCase() + b.substring(1, b.length);
    });
    $(v).css({
      'background-color': 'transparent',
      'border-color': 'transparent',
      'font-weight': 500,
      'color': `var(--${temp})`
    });
  });
  
  let elem = $(`[name=${$('#element-details .full-name').text().toLowerCase()}]`);
  elem.css('border-style', 'dashed');
  $('#'+elem.attr('class').split(' ')[0]).css({
    'background-color': $('#element-details').css('background-color'),
    'color': $('#element-details').css('border-color'),
    'border-color': $('#element-details').css('border-color'),
    'font-weight': 800
  });
  $('.group').each((i, v)=> {
    if (Number($(v).text()) == data[elem.attr('id')-1].position.group)
      $(v).css({
        'color': '#101318',
        'background': 'darkgrey'
      });
    else
      $(v).css({
        'color': 'darkgrey',
        'background': 'transparent'
      });
  });
  $('.period').each((i, v)=> {
    if (Number($(v).text()) == data[elem.attr('id')-1].position.period)
      $(v).css({
        'color': '#101318',
        'background': 'darkgrey'
      });
    else
      $(v).css({
        'color': 'darkgrey',
        'background': 'transparent'
      });
  });
}
function makeOrbital(orbit, name) {
  let dura = 24;
  $('#atom').html('');
  for (let i=6,s=0; i>=0; i--) {
    let p = document.createElement('p');
    p.setAttribute('class', 'shell');
    for (let j=0; j<orbit[i]; j++) {
      let span = document.createElement('span');
      span.style.transform = `rotate(${360 / orbit[i] * (j+1)}deg)`;
      p.appendChild(span);
    }
    p.setAttribute('style', `--len: ${s++}; --dura: ${dura--}`);
    if (orbit[i] == null)
      p.style.visibility = "hidden";
    dura = dura - 2.35;
    $('#atom').append(p);
  }
  $('#atom').append(`<p id="nucleus"><span>${name}</span></p>`);
  let count = 0;
  $('#atom').on('dblclick', ()=> {
    if (count % 2 == 0)
      $('#atom .shell').css({
        'animation': 'none',
        'transform': 'transform(-50%, -50%) rotate(0)'
      });
    else
      $('#atom .shell').css({
        'animation': 'revolve calc(1.75s * var(--dura)) linear infinite .5s'
      });
    count = count == 0 ? 1 : 0;
  });
  $('#atom').on('touchstart', ()=> {
      $('#atom .shell').css({
        'animation-play-state': 'paused'
      });
  });
  $('#atom').on('touchend', ()=> {
    if (count % 2 == 0)
      $('#atom .shell').css({
        'animation-play-state': 'running'
      });
  });
}
function additionalDetails(obj) {
  let id = '#additional-details',
  color = $(`#${obj['atomic number']}`).css('color');
  $(id).css('left', 0);
  $(id+' nav').css({
    'background': color,
    'box-shadow': `0 0 20px 3px ${color.substring(0, color.length-1)}, 0.45)`
  });
  $(id+' article').css({
    'background': color.substring(0, color.length-1) + ', 0.1)'
  });
  setTimeout(()=> {
  $(id).css('visibility', 'visible');
  $('meta[name=theme-color]').attr('content', color);
  makeOrbital(
    obj["electrons per shell"].split(" ").map((v)=>{
  return Number(v.substring(1, v.length))
}), obj.name.short
  );
  $(id+' #nucleus').css({
    'background': color,
    'box-shadow': `inset 1px -1px 7px 1px rgba(0,0,0,0.45), 0 0 10px 5px ${color.substring(0, color.length-1)}, 0.35)`
  });
  $(id+' #name-type span').eq(0).text(obj.name.full +` (${obj.name.short})`);
  $(id+' #name-type span').eq(1).text(obj.type);
  $(id+' #nav-atomic-number span').eq(1).text(obj["atomic number"]);
  $(id+' #nav-group span').eq(1).text(obj.position.group);
  $(id+' #nav-period span').eq(1).text(obj.position.period);
  $(id+' #nav-block span').eq(1).text(obj.block);
  id = '#details'; //changing id
  document.getElementById('details').scrollTop = 0;
  $(id+' #latin-name').text(obj.name.latin);
  $(id+' #discovery-year').text(obj.discovery.year);
  $(id+' #discoverer').text(obj.discovery.discoverer);
  $(id+' #det-atomic-number span').eq(1).text(obj["atomic number"]);
  $(id+' #det-group span').eq(1).text(obj.position.group);
  $(id+' #det-period span').eq(1).text(obj.position.period);
  $(id+' #det-block span').eq(1).text(obj.block);
  $(id+' .subatomic-particle span').eq(0).text(obj['subatomic particle'].electron);
  $(id+' .subatomic-particle span').eq(1).text(obj['subatomic particle'].proton);
  $(id+' .subatomic-particle span').eq(2).text(obj['subatomic particle'].neutron);
  $(id+' #atomic-weight').text(obj['atomic weight'] + ' u (g/mol)');
  $(id+' #electron-per-shell').text(obj['electrons per shell']);
  $(id+' #electron-configuration').text(obj['electron configuration']);
  }, 1000);
  
  let time, interval;
  $('#details p').on('touchstart', (e)=> {
    time = 0;
    clearInterval(interval);
    interval = setInterval(()=> {
      if (time >= 550) {
        if ($(e.target).parent().children('span').length == 2) {
          navigator.clipboard.writeText($(e.target).parent().children('span').eq(1).text());
          navigator.vibrate([20,20]);
        }
        clearInterval(interval);
      }
      else
        time += 10;
    }, 10)
  });
  $('#details p').on('touchend', ()=> {
    clearInterval(interval);
    time = 0;
  });
  $('#details p').on('touchmove', ()=> {
    clearInterval(interval);
    time = 0;
  });
}
function fullscreen(val) {
  if (val) {
    if (document.documentElement.requestFullscreen)
    document.documentElement.requestFullscreen();
  }
  else
    if (document.exitFullscreen)
      document.exitFullscreen();
}

function searchResult(data, val) {
  $('#search-result').html('');
  val = val.trim().toLowerCase();
  data.forEach((v, ind)=> {
    let bool = false,
        str = [v['atomic number'].toString(), v.name.short, v.name.full];
    for (let i=0; i<str.length; i++) {
      if (str[i].toLowerCase().startsWith(val))
        {bool = true; break;}
    }
    let color = v.type.split(" ").join("-").toLowerCase().split("-").reduce((a,b)=> {
      return a + b[0].toUpperCase() + b.substring(1, b.length);
    });
    if (bool) {
      let div = document.createElement('div');
      div.setAttribute('class', 'result');
      div.addEventListener('click', ()=> {
        
    let clip = new Audio ('assests/audio/sound2.mp3');
    clip.play();
        additionalDetails(data[v['atomic number']-1]);
        $('body').css('overflow-y', 'hidden');
        $('#search-area').css({
          'left': -150+'%',
          'visibility': 'hidden'
        });
         if ($('#additional-details').css('visibility') == 'hidden')
        $('meta[name=theme-color]').attr('content', '#101318');
        $('#bar-box').css('display', 'flex');
        $('#wrapper').css('display', 'block');
      });
      div.innerHTML = 
      `<div style="border-color: var(--${color})">
          <span>${v["atomic number"]}</span>
          <span>${v.name.short}</span>
        </div>
        <div>
          <span>${v.name.full}</span>
          <span style="color: var(--${color})">${v.type}</span>
        </div>`
      $('#search-result').append(div);
     }
  });
}
