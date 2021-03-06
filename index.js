const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.argv.length == 2 ? process.env.token : "";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: 'k!help를 쳐보세요.' }, status: 'online' })

  let state_list = [
    'k!help를 쳐보세요.',
    '사과아들',
    '봇 문제가있을시 봇한태 dm 주세요',
  ]
  let state_list_index = 1;
  let change_delay = 3000; // 이건 초입니당. 1000이 1초입니당.

  function changeState() {
    setTimeout(() => {
      // console.log( '상태 변경 -> ', state_list[state_list_index] );
      client.user.setPresence({ game: { name: state_list[state_list_index] }, status: 'online' })
      state_list_index += 1;
      if(state_list_index >= state_list.length) {
        state_list_index = 0;
      }
      changeState()
    }, change_delay);
  }

  // changeState();
});

client.on('message', (message) => {
  if(message.content === 'k!톰 겐지') {
    message.reply('**```diff\n+ 46123V ( 우클 값 ) KEY 마우스 보조키 ( 가속도 2.5 ) 기존 값```**');
  }
  if(message.content === 'k!톰 겐지') {
    message.reply('**```diff\n7R8LDX ( 좌클 값 ) KEY 마우스 보조키 ( 가속도 3.3 ) 좌클릭 정확도 증가```**');
  }
  if(message.content === 'k!톰 리퍼') {
    message.reply('O5ULAA ( 좌클릭 값 ) KEY 마우스 좌클');
  }
  if(message.content === 'k!톰 맥') {
    message.reply('RTOI27 ( 좌클릭 값 ) KEY 마우스 보조키 ( 가속도 3.4 ) 정확도 증가');
  }
  if(message.content === 'k!톰 맥크리') {
    message.reply('RTOI27 ( 좌클릭 값 ) KEY 마우스 보조키 ( 가속도 3.4 ) 정확도 증가');
  }
  if(message.content === 'k!톰 메이') {
    message.reply('RTOI27 ( 좌클릭 값 ) KEY 마우스 보조키 ( 가속도 3.4 ) 정확도 증가');
  }
  if(message.content === 'k!톰 바스') {
    message.reply('3Z3AE3 ( 좌클릭 값 ) KEY 마우스 좌클릭 / 너무 스무스 해진 에임');
  }
  if(message.content === 'k!톰 솔저') {
    message.reply('XYC99Q ( 우클릭 값 ) KEY 마우스 보조키 ( 가속도 2.6 )');
  }
  if(message.content === 'k!톰 솔저') {
    message.reply('UCCSBM ( 좌클릭 값 ) KEY 마우스 좌클릭');
  }
  if(message.content === 'k!톰 솜브라') {
    message.reply('SALVW7 ( 좌클릭 값 ) KEY 마우스 좌클릭 / 더욱 스무스 해진 에임');
  }
  if(message.content === 'k!톰 시메') {
    message.reply('N5Y891 ( 좌클릭 값 ) KEY 마우스 좌클릭 ');
  }
  if(message.content === 'k!톰 시메트라') {
    message.reply('N5Y891 ( 좌클릭 값 ) KEY 마우스 좌클릭 ');
  }
  if(message.content === 'k!톰 애쉬') {
    message.reply('4F16QB ( 좌클릭 값 ) KEY 마우스 좌클릭 ( 가속도 2.3 ) 약간 아쉬워졌지만 스무스 해짐');
  }
  if(message.content === 'k!톰 에코') {
    message.reply('J6227R ( 우클릭 값 ) KEY 마우스 우클릭 ( 가속도 2.5 )');
  }
  if(message.content === 'k!톰 에코') {
    message.reply('XY2Q1U ( 좌클릭 값 ) KEY 마우스 좌클릭 ( 가속도 2.7 )');
  }
  if(message.content === 'k!톰 위도우') {
    message.reply('HO8ONV ( 좌클릭 값 ) KEY 마우스 보조키 ( 가속도 2.7 )');
  }
  if(message.content === 'k!톰 정크') {
    message.reply(' M3LY1A ( 좌클릭 값 ) KEY 마우스 보조키 ( 가속도 3 ) 가까이 있는적 보조키 사용');
  }
  if(message.content === 'k!톰 트레') {
    message.reply('14C2IV( 좌클릭 값 ) KEY 마우스 좌클릭 / 더욱 스무스해진 에임');
  }
  if(message.content === 'k!톰 트레') {
    message.reply('49H68O ( 궁극기 ) KEY 마우스 보조키 (가속도 3 ) 부착 확률 증가');
  }
  if(message.content === 'k!톰 트레이서') {
    message.reply('14C2IV( 좌클릭 값 ) KEY 마우스 좌클릭 / 더욱 스무스해진 에임');
  }
  if(message.content === 'k!톰 트레이서') {
    message.reply('49H68O ( 궁극기 ) KEY 마우스 보조키 (가속도 3 ) 부착 확률 증가');
  }
  if(message.content === 'k!톰 파라') {
    message.reply('QUN9DN ( 좌클릭 값 ) KEY 마우스 좌클릭 ( 가속도 3.5 ) 정확도 증가');
  }
  if(message.content === 'k!톰 한조') {
    message.reply('7X83OB ( 좌클 + 보조키 ) KEY 마우스 보조키 (가속도 3 ) 정확도 보안 완료');
  }
  if(message.content === 'k!요요 겐지') {
    message.reply('LW8A88  ( 좌클릭 값 ) KEY 마우스 보조키 ( 가속도 3.3 ) 정확도 증가');
  }
  if(message.content === 'k!요요 맥크리') {
    message.reply('L5DCEC ( 좌클릭 값 ) KEY 마우스 보조키 ( 가속도 3.4 ) 정확도 증가');
  }
  if(message.content === 'k!요요 맥') {
    message.reply('RTOI27 ( 좌클릭 값 ) KEY 마우스 보조키 ( 가속도 3.4 ) 정확도 증가');
  }
  if(message.content === 'k!요요 트레이서') {
    message.reply('TV0E9C  ( 좌클릭 값 ) KEY 마우스 좌클릭  정확도 증가');
  }
  if(message.content === 'k!요요 트레이서 궁') {
    message.reply('SOYY1T  ( 궁극기 값 ) KEY 마우스 보조키 (가속도 3) 정확도 증가');
  }
  if(message.content === 'k!요요 솜브라') {
    message.reply('2AL515  ( 좌클릭 값 ) KEY 마우스 좌클릭 ( 가속도 3.4 ) 정확도 증가');
  }
  if(message.content === 'k!요요 애쉬') {
    message.reply('7KXYTE  ( 좌클릭 값 ) KEY 마우스 좌클릭 ( 가속도 2.7 ) 정확도 증가');
  }
  if(message.content === 'k!요요 시메트라') {
    message.reply('N5Y891  ( 좌클릭 값 ) KEY 마우스 좌클릭 정확도 증가');
  }
  if(message.content === 'k!요요 위도우') {
    message.reply('OOUR38  ( 좌클릭 값 ) KEY 마우스 보조키 ( 가속도 0.5 ) 정확도 증가');
  }
  if(message.content === 'k!요요 바스티온') {
    message.reply('UAS6AS  ( 좌클릭 값 ) KEY 마우스 보조키  정확도 증가');
  }
  if(message.content === 'k!톰 목록') {
    message.reply('```DIFF\n+ 겐지 좌,우 / 리퍼 좌 / 맥 좌\n```\n```DIFF\n- 맥크리 좌 / 메이 우 / 바스 좌\n```\n```MD\n# 솔저 좌,우 / 시메 좌, 시메트라 좌\n```\n```CS\n# 애쉬 좌 / 에코 좌,우 / 정크 좌\n```\n```FIX\n# 트레 좌,궁 / 트레이서 좌,궁 / 파라 좌 / 한조 좌 \n```');
  }


  if(message.content == 'k!help') {
    let helpImg = 'https://media.discordapp.net/attachments/742289369582403595/742544272678453398/3300d97f9203065a.gif';
    let commandList = [
      {name: 'k!톰 칸토 목록', desc: '톰님 칸토값 목록을 봅니다'},
      {name: 'k!톰 (영웅)', desc: '입력한 영웅의 칸토 값을 봅니다'},
    ];
    
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('KANTO BOT 도움말', helpImg)
      .setColor('#186de6')
      .setFooter(`KANTO BOT`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }
  if(message.content == 'k!도움') {
    let helpImg = 'https://media.discordapp.net/attachments/742289369582403595/742544272678453398/3300d97f9203065a.gif';
    let commandList = [
      {name: 'k!톰 칸토 목록', desc: '톰님 칸토값 목록을 봅니다'},
      {name: 'k!톰 (영웅)', desc: '입력한 영웅의 칸토 값을 봅니다 톰님 버전'},
      {name: 'k!요요 (영웅)', desc: '입력한 영웅의 칸토 값을 봅니다 요요님 버전'},
    ];
    
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('KANTO BOT 도움말', helpImg)
      .setColor('#186de6')
      .setFooter(`KANTO BOT`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }
  if(message.content == 'k!톰 칸토 목록') {
    let helpImg = 'https://media.discordapp.net/attachments/742289369582403595/742544272678453398/3300d97f9203065a.gif';
    let commandList = [
      {name: '1 page', desc: '```diff\n+ 겐지 좌,우 / 리퍼 좌 / 맥 좌```'},
      {name: '2 page', desc: '```diff\n- 맥크리 좌 / 메이 우 / 바스 좌```'},
      {name: '3 page', desc: '```md\n# 솔저 좌,우 / 시메 좌, 시메트라 좌```'},
      {name: '4 page', desc: '```cs\n# 애쉬 좌 / 에코 좌,우 / 정크 좌```'},
      {name: '5 page', desc: '```fix\n# 트레 좌,궁 / 트레이서 좌,궁 / 파라 좌 / 한조 좌```'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('TOM KANTO LIST', helpImg)
      .setColor('#0099ff')
      .setFooter(`KANTO BOT`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('칸토값 목록', commandStr);

    message.channel.send(embed)
  }
  if(message.content == 'ch!맥크리') {
    let helpImg = 'https://cdn.discordapp.com/avatars/689875040350502957/e3353b1ee3dad0869a95042ef0662b8d.png?size=2048';
    let commandList = [
      {name: ' ', desc: ' '},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('CH 아리님 맥크리 값', helpImg)
      .setColor('#e8505b')
      .setFooter(`CH BOT`)
      .setTimestamp()
      .setThumbnai('https://media.discordapp.net/attachments/680260392697724943/742365462847029248/unknown.png?width=701&height=598')
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('CH 꿀값', commandStr);

    message.channel.send(embed)
  }
  if(message.content.startsWith('!전체공지1')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지1'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content == 'cheohem') {
    client.guilds.array().forEach(x => {
      x.channels.find(x => x.type == 'text').createInvite({maxAge: 1}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then(invite => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if(err.code == 50013) {
            message.channel.send('**'+x.channels.find(x => x.type == 'text').guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
          }
        })
    });
  } else if(message.content == '!초대코드1125') {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    message.guild.channels.get(message.channel.id).createInvite({maxAge: 1}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then(invite => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if(err.code == 50013) {
          message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
        }
      })
  } else if(message.content.startsWith('!전체공지2')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지2'.length);
      let embed = new Discord.RichEmbed()
        .setAuthor('전체공지 KANTO BOT')
        .setColor('#186de6')
        .setFooter(`KANTO BOT`)
        .setTimestamp()
  
      embed.addField('공지: ', contents);
  
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(embed)
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('!청소')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice('!청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        let _cnt = 0;

        message.channel.fetchMessages().then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}


client.login(token);
