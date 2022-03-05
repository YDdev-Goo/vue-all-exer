new Vue({
  el: '#app',
  data: {
    myChoice: null,
    comChoice: null,
    count: 1,
    winner: null,
    lifeOfMe: 3,
    lifeOfCom: 3,
    isSelectable: true,
    logs: [],
  },
  watch: {
    count: function(newVal){
      if (newVal === 0) {
        
        // 컴퓨터의 가위바위보 선택
        let number = Math.random()
        if (number < 0.33) {
          this.comChoice = 'scissor'
        } else if (number < 0.66) {
          this.comChoice = 'rock'
        } else {
          this.comChoice = 'paper'
        }

        // 승패 결정
        if (this.myChoice === this.comChoice) this.winner = 'no one' 
        else if (this.myChoice === 'scissor' && this.comChoice === 'paper') this.winner = 'me'
        else if (this.myChoice === 'rock' && this.comChoice === 'scissor') this.winner = 'me'
        else if (this.myChoice === 'paper' && this.comChoice === 'rock') this.winner = 'me'
        else if (this.myChoice === 'scissor' && this.comChoice === 'rock') this.winner = 'com'
        else if (this.myChoice === 'rock' && this.comChoice === 'paper') this.winner = 'com'
        else if (this.myChoice === 'paper' && this.comChoice === 'scissor') this.winner = 'com'
        else this.winner = 'error'

        // 몫 차감
        if (this.winner === 'me') {
          this.lifeOfCom--
        } else if (this.winner === 'com') {
          this.lifeOfMe--
        }

        // 카운트 초기화
        this.count = 1

        // 선택완료 버튼을 보이게 
        this.isSelectable = true

        // 로그 표시
        let log = {
          message: `You: ${this.myChoice}, Computer: ${this.comChoice}`,
          winner: this.winner
        }
        this.logs.unshift(log) // unshift는 push와는 반대로 가장 최근의 것이 가장 먼저 들어간다.
      }
    },
    lifeOfMe: function(newVal) { // 사용자의 생명력이 0이 되었을 때
      if (newVal === 0) {
        setTimeout(() => {
          confirm('패배하였습니다.')
          this.lifeOfMe = 3
          this.lifeOfCom = 3
          this.myChoice = null
          this.comChoice = null
          this.winner = null
          this.logs = []
        }, 500)
      }
    },
    lifeOfCom: function(newVal) { // 컴퓨터의 생명력이 0이 되었을 때
      if (newVal === 0) {
        setTimeout(() => {
          confirm('승리하였습니다.')
          this.lifeOfMe = 3
          this.lifeOfCom = 3
          this.myChoice = null
          this.comChoice = null
          this.winner = null
          this.logs = []
        }, 500)
      }
    }
  },
  methods: {
    startGame() {
      // 선택완료 버튼을 보이게 않게
      this.isSelectable = false
      
      // 1초마다 카운트다운
      if (this.myChoice === null) {
        alert('가위바위보 선택 필요')
        return false
      } else {
        let countDown = setInterval(() => {
          this.count--
          if(this.count === 0){
            clearInterval(countDown)
          }
        }, 1000)
      }
    }
  },
})