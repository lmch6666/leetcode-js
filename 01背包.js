    // 01 背包 每种物品只能拿一个 固定承重 算承重物品最大价值 二维数组方法  一维数组下标表示物品的编号 二维数组表示背包的容量
    // 算每一个物品 能装进背包里的最大价值且每一个物品只能选一个放进背包中

    //递推公式 :  每个物品都有两个状态  放或者是不放 对应 i 和 i - 1
    // 不放入物品 就是取上一次相同重量的物品的价值的数据(不扣总重量) dp[i - 1][j]
    // 放入物品  就是取上一层剩余重量的价值 + 当前放入物品的价值    dp[i -1][j -weight] + value[i]
    // 当前物品你能放的物品重量的最大价值  ->  max(dp[i -1][j -weight] + value[i], dp[i - 1][j])
    function BAGPACK01(weight ,value) {
      let wlen = weight.length;
      let savesize = 4
      let dp = Array.from({length: wlen} , () => Array.from({length: savesize + 1}.fill(0)))
      let dplen = dp.length - 1
      // 先算最小重量物品能放进背包里的最大价值
      for (let i = 1; i <= wlen; i++) {
        dp[0][i] = value[0]
      }

      for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
          if(j < weight[i]){
              dp[i][j] = dp[i - 1][j]
          }else{
            dp[i][j] = Math.max(dp[i - 1][j - weight[i]] + value[i], dp[i - 1][j])
          }
        }
      }

      return dp[dplen][dp[dplen].length - 1]
    }

    // 滚动数组
    function BAGPACK02(weight, value) {
      let size = 5;
      let dp = Array.from({length:size + 1}, () => 0)
      // 初始化容量为最小重量物品能装最多的价值
      for (let i = weight[0]; i < dp.length; i++) {
        dp[i] = value[0]
      }
      // 根据装最小重量的物品的价值来计算
      for (let i = 0; i < weight.length; i++) {
        // 一定从后往前遍历到物品能装的最小重量为止
        for (let j = size; size > weight[i]; j--) {
          dp[j] = Math.max(dp[j] , dp[j - weight[i]] + value[i])
        }
      }
      return dp[size]
    }