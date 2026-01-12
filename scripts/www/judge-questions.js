const judgeQuestions = [
  {
    "type": "judge",
    "question": "工作票附属单，即厂站二次设备及回路工作安全技术措施单和分组工作派工单无需盖章。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "卡线器的规格、材质应与所夹持的线（绳）规格、材质相匹配。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "绝缘工具进行操作冲击耐压试验时，若仅出现一次击穿或闪络现象时，可以认为工具仍然合格有效。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "某供电所新购置了一批班组紧缺的安全工器具，于是物资到货赶紧派发给了班组使用。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "绝缘绳不应沾染油污或受潮。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "绝缘操作杆、验电器和测量杆允许的使用电压应与设备电压等级相符。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "安全帽使用前，应检查帽壳、帽衬、帽箍、顶衬、下颌带等附件完好无损。使用时，应将下颌带系好，防止工作中前倾后仰或其他原因造成滑落。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "绝缘隔板和绝缘罩使用前应擦净灰尘,如果表面只是有轻度擦伤，可不用进行处理，正常使用即可。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "移动式起重机长期或频繁地靠近架空线路或其他带电体作业时，应采取隔离防护措施。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "线路杆塔宜设置作业人员上下杆塔和杆塔上水平移动的防坠落安全保护装置。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "攀登杆塔和转移位置过程中，可以短时不拴安全带。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "某供电所班长刘某与班组成员小王在一次电力工作抢修中，小王在高处作业时，应对使用安全带。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "架空绝缘导线可以视为绝缘设备。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "立、撤杆应使用合格的起重设备。严禁过载使用。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "在进行拆除绝缘子串等可能造成导（地）线与杆塔受力连接件断开的工作前，位于导（地）线侧的作业人员，应将后备保护绳挂在杆塔横担上后解开系在导（地）线侧的安全带，以防导（地）线坠落时身体被拉伤。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "带电设备和线路附近使用的作业机具应接地。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "高压配电线路带电作业时，可以使用绝缘斗支撑导线。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "绝缘斗上双人带电作业，禁止同时在不同相或不同电位作业。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "带电清扫作业时，作业人的双手应始终握持绝缘杆保护环以下部位。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "高压配电线路带电短接故障线路、设备后，应确认故障已隔离。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "开断高压配电线路导线时最多只允许两相同时进行，不允许三相导线同时进行开断。开断后应及时对开断的导线端部采取绝缘包裹等遮蔽措施。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "在带电作业过程中如设备突然停电，作业人员可以认为设备不带电，按照停电方式继续进行作业。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "验电前，应先在相应电压的带电设备上确证验电器良好，后立即在停电设备上实施验电。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "新加入的作业人员，工作班人员应对其进行安全交代。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "工作期间，工作负责人因故暂时离开工作现场时，应暂停工作或指定有资质的人员临时代替，并交代清楚工作任务、现场安全措施、工作班人员情况及其他注意事项，并告知工作许可人和工作班人员。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "带电作业工作票如需变更工作负责人，应经工作票签发人同意并通知工作许可人，在工作票上记录变更情况和签名，工作负责人允许变更一次。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "若现场需增加工作任务，当需要变更安全措施时，应由工作负责人征得工作票签发人和工作许可人同意，在原工作票上增加工作项目，并签名确认。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "使用多天工作的带电作业工作票，每日必须办理工作间断手续；次日复工前检查安全措施对完好后即可开始工作,无需向工作许可人办理复工手续。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "在未接到停电许可工作命令前，除工作负责人外任何人不得接近带电体。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "手机信号不好时，可以约时停、送电。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "高压配电线路作业不需要停用重合闸的带电作业工作票或线路第二种工作票，应在工作前一日送达许可部门值班负责人。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "需停用线路重合闸或退出再启动功能的带电作业工作票或线路第二种工作票,应在工作前一日送达许可部门。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "使用公司工作票到与接入公司电网的用户电气设备上工作时，工作票应由本单位签发，无需用户单位认可。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "使用同一张线路工作票或带电作业工作票且下设多个分组的工作可以使用《分组工作派工单》。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "小刘在一次带电作业工作中，需同时进行电杆上高压带电作业及下层低压线路带电作业工作，可在数条线路上共用一张工作票。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "调度许可人可不参加“三种人”资格考试，但应以调度员资格发文形式公布，并送达相关单位。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "配电作业运检一体时，工作许可人和工作负责人可以相互兼任。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "作业现场的安全设施、施工机具、安全工器具和劳动防护用品等应符合国家、行业标准及公司规定，在作业后确认合格、齐备。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "作业中，人员应跨越正在作业的卷扬钢丝绳。物件提升后，操作人员不应离开机械。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "动火作业全程应设有专人监护。动火作业后，应清除动火现场及周围的易燃物品，或采取其他有效的防火安全措施，配备足够适用的消防器材。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "在沟道和井下等密闭空间作业时，应在周围设置遮栏和警示标志。工作现场不应少于2人，地面上应有人担任监护。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "作为工作负责人的老陈，应该掌握的全面准确的保留或邻近的带电线路、设备及其状态。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "电气测量工作，可由一人单独进行",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "开启电缆井井盖、电缆沟盖板及电缆隧道人孔盖时应使用专用工具，同时注意所立位置，以免滑脱后伤人。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "电缆施工前应先查清图纸，再开挖足够数量的样洞和样沟，查清运行电缆位置及地下管线分布情况。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "测量用的导线，应使用相应的绝缘导线，其端部应有绝缘套。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "非金属外壳的仪器，无需与地绝缘，金属外壳的仪器和仪用变压器外壳应接地。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "变更接线或试验结束时，应首先断开试验电源、放电，将升压设备的高压部分放电、短路接地。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "同一电气连接部分，检修和高压试验工作能够同时进行。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "在10kV杆塔上清理树障，应使用有后备保护绳的双背带式或全身式安全带，所使用工器具距离10kV带电线路应大于1m。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "经本单位批准允许单独巡视高压设备的人员，巡视高压设备时，可进行其他工作，不应移开或越过遮栏。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "低压开关（熔丝）拉开（取下）后，应在操作把手上悬挂“禁止合闸，有人工作！”或“禁止合闸，线路有人工作！”标示牌。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "工作人员不应擅自移动或拆除遮栏（围栏）、标示牌，不应越过遮栏（围栏）工作。因工作原因必须短时移动或拆除遮栏（围栏）、标示牌时，应征得工作许可人同意，并在工作负责人的监护下进行，完毕后应立即恢复。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "厂站工作时的隔离开关或断路器操作把手、电压互感器低压侧空气开关（熔断器）操作处，应悬挂“禁止合闸，有人工作!”的标示牌。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "登杆塔前，应检查登高工具、设施，如脚扣、升降板、安全带、梯子等是否完整牢靠。可利用绳索、拉线上下杆塔或顺杆下滑。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "邻近或交叉其他电力线路的工作应设专人监护，以防误登带电线路杆塔。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "带电设备和线路附近使用的作业机具可以不接地",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "采用旁路作业方式进行电缆线路不停电作业前，应确认两侧备用间隔断路器及旁路断路器均在断开状态。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "工作期间，工作负责人因故暂时离开工作现场时，应暂停工作或指定有资质的人员临时代替，并交代清楚工作任务、现场安全措施、工作班人员情况及其他注意事项，并告知工作许可人和工作班人员。原工作负责人返回工作现场时，无需再履行该交接手续。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "火灾、地震、台风、冰雪、洪水、泥石流、沙尘暴等灾害发生时，如需对设备进行巡视，应制定必要的安全措施，巡视人员应得到设备运维单位批准后可单人巡视，巡视人员还应与派出部门之间保持通信联络。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "装拆接地线应有人监护。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "低压配电网设备停电前，检修或装表接电后应在与停电检修部位或表计电气上直接相连的可验电部位验电。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "对同杆塔架设的多层、同一横担多回线路验电时，应先验低压、后验高压，先验下层、后验上层，先验近侧、后验远侧。禁止作业人员越过未经验电、接地的线路对上层、远侧线路验电。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "使用一张工作票并在检修状态下的一条高压线路分区段工作，工作班自行装设的接地线等安全措施可分段执行。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "使用多天工作的带电作业工作票，每日必须办理工作间断手续；次日复工前应与工作签发人联系，办理复工手续。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "低压配电网工作票和紧急抢修工作票如需变更工作负责人，应重新办理工作票。其他工作票如需变更工作负责人，应经工作票签发人同意并通知工作许可人，在工作票上记录变更情况和签名，工作负责人允许变更一次。原工作负责人应将变更情况告知全体工作班人员，工作交接时应暂停现场作业并做好交接。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "工作间断时，工作地点的全部接地线可保留不动。工作班人员需暂时离开工作地点，必须采取安全措施，必要时派人看守。复工前，应检查各项安全措施的完整性。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "工作间断时，工作班人员应从工作现场撤出，所有安全措施可保持不变；复工前不用派人检查，确认安全措施完备后，方可开始工作。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "设备停电作业时，工作负责人在确保监护工作不受影响，且班组人员确有触电等危险的条件下，可以参加工作班工作。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "若停电线路作业还涉及其他单位配合停电的线路，工作负责人应确认配合停电的线路已停电及做好相应措施，并与线路相应的所辖调度办理工作许可手续后，方可开始工作。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "作业人员应接受相应的安全生产教育和岗位技能培训，考试后上岗。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "作业人员有权依据本规程拒绝违章指挥和强令冒险作业，在发现危及人身安全的情况时，有权停止作业或采取可行的应急措施后撤离作业场所，并立即报告。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "作业规范是指作业单位应为作业人员提供符合国家法律、标准及公司规定的现场安全条件，不具备安全生产条件的不得从事现场作业。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "紧急抢修工作是指设备设施在日常运行或自然灾害情况下，发生故障停运或紧急缺陷后，且需立即进行的紧急修理等处置工作。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "双重名称是指设备的名称和称号。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "个人保安线是用于保护工作人员防止感应电伤害的接地线。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "运行设备是实现指定电气或相关功能，并处于实时发电、输电、变电、配电和供电状态下的设备或设施。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "电力设施是指应用到电力系统中的发电、变电、输电和配电等设备的总称。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "装运超长、超高或重大物件押运人员应加强途中检查，防止捆绑松动；通过山区或弯道时，防止超长部位与山坡或行道树碰剐。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "直流接地极线路上的作业点一端应装设接地线。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "二级动火区动火作业，应填用二级动火工作票。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "一级动火区动火作业，应填用一级动火工作票。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "线路送电操作顺序，应先合上母线侧隔离开关，后合上线路侧隔离开关，再合上断路器。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "可以用隔离开关拉开、合上带负荷设备或带负荷线路。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "办理分组工作派工单：需要时在“是”前打勾，并注明张数，不需要时在“否”前打勾。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "施工机具应统一编号，由专人保管和保养维护。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "电容型验电器试验周期为一年。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "新购置和自制的安全工器具可以不进行试验。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "携带型接地线宜存放在专用架上，架上的号码与接地线的号码可以不一致。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "填写《线路第一种工作票》工作任务：填写线路电压等级、名称，及本次计划安排的工作内容。同一电压等级的多条线路，可只在第一条线路名称前填写电压等级。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "依据《中国南方电网有限责任公司电力安全工作规程》，低压配电网巡视时，禁止触碰裸露带电部位。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "工作人员视情况可开启直接封闭带电部分的高压设备柜门、箱盖、封板等。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "工作人员不应擅自移动或拆除遮栏（围栏）、标示牌，不应越过遮栏（围栏）工作。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "线路工作装拆接地线时应填写《线路工作接地线使用登记管理表》，但不需作为工作票的附件保存。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "在同杆塔架设的多回线路上装设接地线时，应先装低压、后装高压，先装下层、后装上层，先装近侧、后装远侧。拆除时次序相同。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "工作中，需要断开耐张杆塔引线（连接线）或拉开断路器、隔离开关时，无需在其两侧装设接地线。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "绝缘导线的接地线应装设在验电接地环上或裸露的导电部分。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "杆塔接地电阻和接地通道应良好，杆塔与接地线连接部分应清除油漆。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "装拆接地线导体端应使用绝缘棒或专用的绝缘绳，人体不应碰触接地线。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "验电时人体与被验电设备的距离应大于电力安全工作规程规定的作业安全距离。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "验电器的伸缩式绝缘棒长度应拉足，保证绝缘棒的有效绝缘长度符合规定，验电时手应握在手柄处，不应超过护环。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "低压配电网停电工作前，对工作中有可能触碰的相邻带电线路、设备应采取停电或绝缘遮蔽措施。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "两台及以上配电变压器低压侧共用一个接地引下线时，其中任一台配电变压器停电检修，其他配电变压器无须停电。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "依据《中国南方电网有限责任公司电力安全工作规程》规定，作业现场敷设在地面上的施工用电线路应采用绝缘电缆，交通车辆通行路面上的电缆应设有防碾压的措施。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "开展抢修工作应做好风险分析和安全措施，防止发生次生灾害。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "依据《中国南方电网有限责任公司电力安全工作规程》规定，作业现场施工用电设施应由取得资质的人员安装维护，严禁私拉乱接，但可以将电线直接钩挂在闸刀上或直接插入插座内使用。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "汽车式起重机除设计具有吊物行走性能者外，均不应吊物行走。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "禁止用起重机起吊埋在地下的物件。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "允许作业人员利用吊钩来上升或下降。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "乙炔软管着火时，应先将火焰熄灭，然后停止供气；氧气软管着火时，应先关闭供气阀门，停止供气后再处理着火软管；不得使用弯折软管的方法处理。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "电焊工作结束后必须切断电源，检查工作场所及其周围，确认无起火危险后方可离开",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "电焊机的外壳应可靠接地，电焊机露天放置选择潮湿场所时，并加防雨罩。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "攀登杆塔前，应检查杆根、基础和拉线是否牢固。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "塔脚检查，在不影响铁塔稳定的情况下，可以在对角线的两个基脚同时挖坑。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "线路作业应在良好的天气下进行，遇有恶劣气象条件时，应停止工作。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "紧急抢修工作指设备设施在日常运行或自然灾害情况下，发生故障停运或紧急缺陷后，且需立即进行的紧急修理等处置工作。",
    "options": ["对", "错"],
    "answer": "对",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "《中国南方电网有限责任公司电力安全工作规程》规定，1kV以上、20kV及以下的高压线路称为高压配电线路。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  },
  {
    "type": "judge",
    "question": "《中国南方电网有限责任公司电力安全工作规程》规定，高压设备是指电气设备中电压等级在10kV及以上的设备及设施。",
    "options": ["对", "错"],
    "answer": "错",
    "explanation": "无"
  }
]