import { PreloadAssetsScene } from "./preload/PreloadAssetsScene.js";
import { LoadingScene } from "./loading/loading.js";
import { StartScene } from "./start/start.js";
import { RegisterScene } from './register/register.js';
import { LoginScene } from "./login/login.js";
import { SharedDevicePromptScene } from "./login/components/sharedDevicePrompt.js";
import { LoginSavePasswordPromptScene } from "./login/components/savepassword/savePasswordPrompt.js";
import { ErrorScene } from "./error/error.js";
import { TownScene } from "./world/rooms/town/town.js";
import { ServerSelectionScene } from "./login/components/serverSelection.js";
import { MapScene } from "./interfaces/map.js";
import { InterfaceScene } from "./interfaces/interface";
import { DanceclubScene } from "./world/rooms/danceclub/danceclub.js";
import { CoffeeShopScene } from "./world/rooms/coffeeshop/coffeeshop.js";
import { GiftshopScene } from "./world/rooms/giftshop/giftshop.js";
import { SnowFortsScene } from "./world/rooms/snowforts/snowforts.js";
import { PlazaScene } from "./world/rooms/plaza/plaza.js";
import { DocksScene } from "./world/rooms/docks/docks.js";
import { BeachScene } from "./world/rooms/beach/beach.js";
import { LighthouseScene } from "./world/rooms/lighthouse/lighthouse.js";
import { BeaconScene } from "./world/rooms/beacon/beacon.js";
import { SkiVillageScene } from "./world/rooms/skivillage/skivillage.js";
import { SkihillScene } from "./world/rooms/skihill/skihill.js";
import { MineShackScene } from "./world/rooms/mineshack/mineshack.js";
import { IcebergScene } from "./world/rooms/iceberg/iceberg.js";
import { ForestScene } from "./world/rooms/forest/forest.js";
import { CoveScene } from "./world/rooms/cove/cove.js";
import { BoilerRoomScene } from "./world/rooms/boilerroom/boilerroom.js";
import { PuffleWildScene } from "./world/rooms/puffleWild/puffleWild.js";
import { DojoScene } from "./world/rooms/dojo/dojo.js";
import { FireDojoScene } from "./world/rooms/dojo/fire/firedojo.js";
import { WaterDojoScene } from "./world/rooms/dojo/water/waterdojo.js";
import { SnowDojoScene } from "./world/rooms/dojo/snow/snowdojo.js";
import { InterfaceDanceScene } from "./interfaces/dances.js";
import { InterfaceEmojiScene } from "./interfaces/emojis.js";
import { BookRoomScene } from "./world/rooms/bookroom/bookroom.js";
import { LoungeScene } from "./world/rooms/lounge/lounge.js";
import { IceRinkScene } from "./world/rooms/icerink/icerink.js";
import { CaveMineScene } from "./world/rooms/cavemine/cavemine.js";
import { PetShopScene } from "./world/rooms/petshop/petshop.js";
import { PizzaParlorScene } from "./world/rooms/pizzaparlor/pizzaparlor.js";
import { BoxDimensionScene } from "./world/rooms/boxdimension/boxdimension.js";
import { SkiLodgeScene } from "./world/rooms/skilodge/skilodge.js";
import { AtticScene } from "./world/rooms/attic/attic.js";
import { DojoCourtYardScene } from "./world/rooms/dojocourtyard/dojocourtyard.js";
import { PirateShipScene } from "./world/rooms/pirateship/pirateship.js";
import { ShipHoldScene } from "./world/rooms/shiphold/shiphold.js";
import { ShipNestScene } from "./world/rooms/shipnest/shipnest.js";
import { HiddenLakeScene } from "./world/rooms/hiddenlake/hiddenlake.js";
import { MineScene } from "./world/rooms/mine/mine.js";
import { PuffleParkScene } from "./world/rooms/pufflepark/pufflepark.js";
import { PuffleHotelLobby } from "./world/rooms/pufflehotellobby/pufflehotellobby.js";
import { PuffleHotelSpa } from "./world/rooms/pufflehotelspa/pufflehotelspa.js";
import { PuffleHotelRoof } from "./world/rooms/pufflehotelroof/pufflehotelroof.js";
import { BerryMallScene } from "./world/rooms/berrymall/berrymall.js";
import { SkateParkScene } from "./world/rooms/skatepark/skatepark.js";
import { SchoolScene } from "./world/rooms/school/school.js";
import { AgentLobbyScene } from "./world/rooms/agentlobby/agentlobby.js";
import { CaveScene } from "./world/rooms/cave/cave.js";
import { UnderwaterScene } from "./world/rooms/underwater/underwater.js";

export const classScenes = {
    "preloadassetsscene": PreloadAssetsScene,
    "loadingscene": LoadingScene,
    "startscene": StartScene,
    "registerscene": RegisterScene,
    "loginscene": LoginScene,
    "loginshareddevicepromptscene": SharedDevicePromptScene,
    "loginsavepasswordpromptscene": LoginSavePasswordPromptScene,
    "errorscene": ErrorScene,
    "serverselectionscene": ServerSelectionScene,
    "townscene": TownScene,
    "interfacescene": InterfaceScene,
    "mapscene": MapScene,
    "danceclubscene": DanceclubScene,
    "coffeeshopscene": CoffeeShopScene,
    "clothesshopscene": GiftshopScene,
    "snowfortsscene": SnowFortsScene,
    "plazascene": PlazaScene,
    "docksscene": DocksScene,
    "beachscene": BeachScene,
    "lighthousescene": LighthouseScene,
    "beaconscene": BeaconScene,
    "skivillagescene": SkiVillageScene,
    "skihillscene": SkihillScene,
    "mineshackscene": MineShackScene,
    "icebergscene": IcebergScene,
    "forestscene": ForestScene,
    "covescene": CoveScene,
    "boilerroomscene": BoilerRoomScene,
    "pufflewildscene": PuffleWildScene,
    "dojoscene": DojoScene,
    "firedojoscene": FireDojoScene,
    "waterdojoscene": WaterDojoScene,
    "underwaterscene": UnderwaterScene,
    "interfacedancescene": InterfaceDanceScene,
    "interfaceemojiscene": InterfaceEmojiScene,
    "bookroomscene": BookRoomScene,
    "loungescene": LoungeScene,
    "icerinkscene": IceRinkScene,
    "caveminescene": CaveMineScene,
    "petshopscene": PetShopScene,
    "pizzaparlorscene": PizzaParlorScene,
    "boxdimensionscene": BoxDimensionScene,
    "skilodgescene": SkiLodgeScene,
    "atticscene": AtticScene,
    "dojocourtyardscene": DojoCourtYardScene,
    "snowdojoscene": SnowDojoScene,
    "pirateshipscene": PirateShipScene,
    "shipholdscene": ShipHoldScene,
    "shipnestscene": ShipNestScene,
    "hiddenlakescene": HiddenLakeScene,
    "minescene": MineScene,
    "puffleparkscene": PuffleParkScene,
    "pufflehotellobbyscene": PuffleHotelLobby,
    "pufflehotelspascene": PuffleHotelSpa,
    "pufflehotelroofscene": PuffleHotelRoof,
    "berrymallscene": BerryMallScene,
    "skateparkscene": SkateParkScene,
    "schoolscene": SchoolScene,
    "agentlobbyscene": AgentLobbyScene,
    "cavescene": CaveScene,
};