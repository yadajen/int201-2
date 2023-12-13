const { template } = require('@babel/core')
const { re } = require('@babel/core/lib/vendor/import-meta-resolve')
//65130500017
//yada jenrungrodsakul

class LoyaltyPoint {
  constructor(customerId) {
    this.memberId = customerId
    // this.memberId = Math.floor(Math.random() * 1000000)
    this.points = 0
    this.memberType = this.calculateMembershipLevel()
  }
  calculatePoints(purchaseAmount) {
    const point = purchaseAmount / 25
    this.points += Math.floor(point)
    return this.points
  }
  redeem(redeemPoints) {
    if (redeemPoints > this.points || redeemPoints < 800) return -1
    const cashcou = Math.floor(redeemPoints / 800)
    const redeem = cashcou * 800
    this.points -= redeem
    return {
      memberId: this.memberId,
      cashCoupons: cashcou,
      redeemPoints: redeem,
      currentPoints: this.points,
    }
  }
  calculateMembershipLevel() {
    // if (this.points < 10000) {
    //   return 'SILVER'
    // } else if (this.points > 20000) {
    //   return 'PLATINUM'
    // } else return 'GOLD'

    if (this.points <= 9999) {
      this.memberType = 'SILVER'
      //   return 'SILVER'
    }
    if (this.points >= 10000 && this.points <= 20000) {
      this.memberType = 'GOLD'
      //   return 'GOLD'
    }
    if (this.points > 20000) {
      this.memberType = 'PLATINUM'
      //   return 'PLATINUM'
    }
    return this.memberType
  }
}

const person1 = new LoyaltyPoint(13123)
// console.log(person1.calculatePoints(29500))
// console.log(person1.redeem(900))
console.log(person1.memberType)
person1.points = 10000
console.log(person1.calculateMembershipLevel())
console.log(person1.memberType)
module.exports = LoyaltyPoint
