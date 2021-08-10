import React,{Component,useRef, useState} from 'react';
import{
SafeAreaView,
StyleSheet,
View,
Text,
StatusBar,
ImageBackground,
TouchableOpacity,
ScrollView,
TextInput,
PickerIOSComponent,
} from 'react-native';
import{createAppContainer} from "react-navigation"
import{createBottomTabNavigator} from "react-navigation-tabs"
import{createStackNavigator} from "react-navigation-stack"
import Constants from 'expo-constants';
import CountDown from 'react-native-countdown-component';
import YoutubePlayer from "react-native-youtube-iframe" 
import  WebView  from 'react-native-webview';


class VideoAyt extends React.Component{ 
  constructor(){super();
   }
    render()


    
    {return <WebView source={{uri:"https://www.youtube.com/embed/RbWKWF6TDEo"}}>
 </WebView>
    }
  }

class VideoTyt extends React.Component{ 
  constructor(){super();
  }
    render()
  
  
  
  
  {return <WebView source={{uri:"https://www.youtube.com/embed/DbJ7bnmm0f8"}}>
 </WebView>}
   
    }
  
class Notalma extends React.Component{ 
  constructor(){super();}
render(){return  <WebView source={{uri:"https://www.rapidtables.com/tools/notepad.html"}}>
</WebView> }
}

class AYT extends React.Component{ 
  constructor(){super();}
render(){return(
<ScrollView style={{flex:1,backgroundColor:'#714DF4'}}>   

<Text style={{fontSize:35,color:'hotpink',marginLeft:20,marginTop:50}}>
Ayt konuları {'\n'}
</Text>

<Text style={{fontSize:23,marginLeft:20,marginTop:30,marginBottom:15,color:'white'}}>
  <Text style={{color:'white'}} >

  <Text style={{color:'#99E2DB' ,fontSize:30}}>Matematik {'\n'}</Text>

Temel Kavramlar ~{"\n"}
Sayı Basamakları ~{"\n"}
Bölme ve Bölünebilme ~{"\n"}
EBOB – EKOK ~{"\n"}
Rasyonel Sayılar ~{"\n"}
Basit Eşitsizlikler ~{"\n"}
Mutlak Değer ~{"\n"}
Üslü Sayılar ~{"\n"}
Köklü Sayılar ~{"\n"}
Çarpanlara Ayırma ~{"\n"}		
Oran Orantı~{"\n"}
Denklem Çözme~{"\n"}
Problemler~{"\n"}
Kümeler~{"\n"}
Kartezyen Çarpım~{"\n"}
Mantık~{"\n"}
Fonskiyonlar~{"\n"}
Polinomlar~{"\n"}
2.Dereceden Denklemler~{"\n"}
Permütasyon ve Kombinasyon~{"\n"}
Binom ve Olasılık~{"\n"}
İstatistik~{"\n"}
Karmaşık Sayılar~{"\n"}
2.Dereceden Eşitsizlikler~{"\n"}
Parabol~{"\n"}
Trigonometri~{"\n"}
Logaritma~{"\n"}
Diziler~{"\n"}
Limit~{"\n"}
Türev~{"\n"}
İntegral~{"\n"} </Text>
<Text><Text style={{color:'#99E2DB',}}>Geometri {'\n'}</Text>
Temel Kavramlar~{"\n"}
Doğruda Açılar~{"\n"}
Üçgende Açılar~{"\n"}
Özel Üçgenler~{"\n"}
Dik Üçgen~{"\n"}
İkizkenar Üçgen~{"\n"}
Eşkenar Üçgen~{"\n"}
Açıortay~{"\n"}
Kenarortay~{"\n"}
Üçgende Alan~{"\n"}
Üçgende Benzerlik~{"\n"}
Açı Kenar Bağıntıları~{"\n"}
Çokgenler~{"\n"}
Özel Dörtgenler~{"\n"}
Dörtgenler~{"\n"}
Deltoid~{"\n"}
Paralelkenar~{"\n"}
Eşkenar Dörtgen~{"\n"}
Dikdörtgen~{"\n"}
Kare~{"\n"}
İkizkenar~{"\n"}
Yamuk~{"\n"}
Çember ve Daire~{"\n"}
Analitik Geometri~{"\n"}
Noktanın Analitiği~{"\n"}
Doğrunun Analitiği~{"\n"}
Dönüşüm Geometrisi~{"\n"}
Katı Cisimler (Uzay Geometri)~{"\n"}
Dikdörtgenler Prizması~{"\n"}
Küp~{"\n"}
Silindir~{"\n"}
Piramit~{"\n"}
Koni~{"\n"}
Küre~{"\n"} </Text>
<Text><Text style={{color:'#99E2DB'}}>Fizik {'\n'}</Text>
 Vektörler~{"\n"}
Kuvvet, Tork ve Denge ~{"\n"}
Kütle Merkezi ~{"\n"}
Basit Makineler~{"\n"}
Hareket~{"\n"}
Newton’un Hareket Yasaları~{"\n"}
İş, Güç ve Enerji II~{"\n"}
Atışlar~{"\n"}
İtme ve Momentum~{"\n"}
Elektrik Alan ve Potansiyel~{"\n"}
Paralel Levhalar ve Sığa~{"\n"}
Manyetik Alan ve Manyetik Kuvvet~{"\n"}
İndüksiyon, Alternatif Akım ve Transformatörler~{"\n"}
Çembersel Hareket~{"\n"}
Kütle Çekim ve Kepler Yasaları~{"\n"}
Basit Harmonik Hareket~{"\n"}
Dalga Mekaniği ve Elektromanyetik Dalgalar~{"\n"}
Atom Modelleri~{"\n"}
Büyük Patlama ve Radyoaktivite~{"\n"}
Modern Fizik~{"\n"}
Modern Fiziğin Teknolojideki Uygulamaları~{"\n"} </Text>
<Text><Text style={{color:'#99E2DB'}}>Kimya ~{"\n"} </Text>
Kimya Bilimi~{"\n"}
Atom ve Periyodik Sistem~{"\n"}
Kimyasal Türler Arası Etkileşimler~{"\n"}
Kimyasal Hesaplamalar~{"\n"}
Kimyanın Temel Kanunları~{"\n"}
Asit, Baz ve Tuz~{"\n"}
Maddenin Halleri~{"\n"}
Karışımlar~{"\n"}
Doğa ve Kimya~{"\n"}
Kimya Her Yerde~{"\n"}
Modern Atom Teorisi~{"\n"}
Gazlar~{"\n"}
Çözeltiler~{"\n"}
Kimyasal Tepkimelerde Enerji~{"\n"}
Kimyasal Tepkimelerde Hız~{"\n"}
Kimyasal Tepkimelerde Denge~{"\n"}
Asit-Baz Dengesi~{"\n"}
Çözünürlük Dengesi~{"\n"}
Kimya ve Elektrik~{"\n"}
Karbon Kimyasına Giriş~{"\n"}
Organik Kimya~{"\n"}
</Text>
<Text><Text style={{color:'#99E2DB'}}>Biyoloji{'\n'}</Text>
Sinir Sistemi~{"\n"}
Endokrin Sistem~{"\n"}
Duyu Organları~{"\n"}
Destek ve Hareket Sistemi~{"\n"}
Sindirim Sistemi~{"\n"}
Dolaşım ve Bağışıklık Sistemi~{"\n"}
Solunum Sistemi~{"\n"}
Boşaltım Sistemi~{"\n"}
Üriner Sistem~{"\n"}
Üreme Sistemi ve Embriyonik Gelişim~{"\n"}
Komünite ve Popülasyon Ekolojisi~{"\n"}
Nükleik Asitler~{"\n"}
Genetik Şifre ve Protein Sentezi~{"\n"}
Canlılık ve Enerji~{"\n"}
Fotosentez ve Kemosentez~{"\n"}
Hücresel Solunum~{"\n"}
Bitki Biyolojisi~{"\n"}
Canlılar ve Çevre~{"\n"} </Text>
<Text><Text style={{color:'#99E2DB'}}>Edebiyat{'\n'}</Text>
Anlam Bilgisi~{"\n"}
Dil Bilgisi~{"\n"}
Güzel Sanatlar ve Edebiyat~{"\n"}
Metinlerin Sınıflandırılması~{"\n"}
Şiir Bilgisi~{"\n"}
Edebi Sanatlar~{"\n"}
Türk Edebiyatı Dönemleri~{"\n"}
İslamiyet Öncesi Türk Edebiyatı ve Geçiş Dönemi~{"\n"}
Halk Edebiyatı~{"\n"}
Divan Edebiyatı~{"\n"}
Tanzimat Edebiyatı~{"\n"}
Servet-i Fünun Edebiyatı~{"\n"}
Fecr-i Ati Edebiyatı~{"\n"}
 Milli Edebiyat~{"\n"}
Cumhuriyet Şiiri~{"\n"}
Cumhuriyet Romanı~{"\n"}
Cumhuriyet Dönemi~{"\n"}
Edebiyat Akımları~{"\n"}
Dünya Edebiyatı~{"\n"} </Text>
<Text><Text style={{color:'#99E2DB'}}>Coğrafya{'\n'}</Text>
 Ekosistem~{"\n"}
Doğadaki Ekstrem Olaylar~{"\n"}
İlk Medeniyet ve Şehirler~{"\n"}
Nüfus Politikaları~{"\n"}
 Türkiye’de Nüfus ve Yerleşme~{"\n"}
Ekonomik Faaliyetler~{"\n"}
Göç ve Şehirleşme~{"\n"}
Türkiye Ekonomisi~{"\n"}
Türkiye’nin Jeopolitik Konumu~{"\n"}
Bölgesel Kalkınma Projeleri~{"\n"}
İklim ve Yer şekilleri~{"\n"}
Ülkeler Arası Etkileşim~{"\n"}
Küresel ve Bölgesel Örgütler~{"\n"}
Üretim Alanları ve Ulaşım Ağları~{"\n"}
Bölgeler ve Ülkeler~{"\n"}
Çevre ve Toplum~{"\n"}
Doğal Afetler~{"\n"} </Text>
<Text><Text style={{color:'#99E2DB'}}>Tarih {'\n'}</Text>
Tarih Bilimi~{"\n"}
İlk Uygarlıklar~{"\n"}
İlk Türk Devletleri~{"\n"}
İslam Tarihi ve Uygarlığı~{"\n"}
Türk-İslam Devletleri~{"\n"}
Orta Çağ ve Avrupa Tarihi~{"\n"}
Türkiye Tarihi~{"\n"}
Beylikten Devlete (1300-1453)~{"\n"}
Dünya Gücü: Osmanlı Devleti (1453-1600)~{"\n"}
Osmanlı Kültür ve Medeniyeti~{"\n"}
Yeni ve Yakın Çağda Avrupa Tarihi~{"\n"}
Arayış Yılları (17. Yüzyıl)~{"\n"}
Yeni Çağda Avrupa~{"\n"}
En Uzun Yüzyıl (1800-1922)~{"\n"}
20. Yüzyıl Başlarında Osmanlı Devleti~{"\n"}
1. Dünya Savaşı – Milli Mücadeleye Hazırlık Dönemi~{"\n"}
Kurtuluş Savaşı ve Antlaşmalar~{"\n"}
I. TBMM Dönemi~{"\n"}
Türk İnkılabı~{"\n"}
Atatürkçülük ve Atatürk İlkeleri~{"\n"}
Türk Dış Politikası~{"\n"}
Atatürk’ün Ölümü~{"\n"}
20. yy Başlarında Dünya~{"\n"}
İkinci Dünya Savaşı~{"\n"}
Soğuk Savaş Dönemi~{"\n"}
Yumuşama Dönemi ve Sonrası~{"\n"}
Küreselleşen Dünya~{"\n"}
XXI. Yüzyılın Eşiğinde Türkiye ve Dünya~{"\n"}
</Text></Text>
</ScrollView>)}}

class TYT extends React.Component{ 
  constructor(){super();}
render(){return(<ScrollView style={{flex:1,backgroundColor:'#714DF4'}}>   

<Text style={{fontSize:35,color:'hotpink',marginLeft:20,marginTop:50}}>
Tyt konuları {'\n'}
</Text>

<Text style={{fontSize:23,marginLeft:20,marginTop:30,marginBottom:15,color:'white'}}>
  <Text style={{color:'white'}} >

  <Text style={{color:'#99E2DB' ,fontSize:30}}>Türkçe {'\n'}</Text>

Dil Bilgisi ~{'\n'}
Sözcükte Anlam~{"\n"}
Söz Yorumu~{"\n"}
Deyim ve Atasözü~{"\n"}
Cümlede Anlam~{"\n"}
Paragrafta Anlam~{"\n"}
Paragrafta Anlatım Teknikleri~{"\n"}
Paragrafta Konu-Ana Düşünce~{"\n"}
Paragrafta Yapı~{"\n"}
Paragrafta Yardımcı Düşünce~{"\n"}
Ses Bilgisi~{"\n"}
Yazım Kuralları~{"\n"}
Noktalama İşaretleri~{"\n"}
Sözcükte Yapı~{"\n"}
Sözcük Türleri~{"\n"}
İsimler~{"\n"}
Zamirler~{"\n"}
Sıfatlar~{"\n"}
Zarflar~{"\n"}
Edat – Bağlaç – Ünlem~{"\n"}
Fiil, Ek Fiil, Fiilimsi~{"\n"}
Sözcük Grupları~{"\n"}
Cümlenin Ögeleri~{"\n"}
Cümle Türleri~{"\n"}
Anlatım Bozukluğu~{"\n"} </Text>
<Text><Text style={{color:'#99E2DB',}}>Matematik{'\n'}</Text>
Temel Kavramlar~{"\n"}
Sayı Basamakları~{"\n"}
Bölme ve Bölünebilme~{"\n"}
EBOB – EKOK~{"\n"}
Rasyonel Sayılar~{"\n"}
Basit Eşitsizlikler~{"\n"}
Mutlak Değer~{"\n"}
Üslü Sayılar~{"\n"}
Köklü Sayılar~{"\n"}
Çarpanlara Ayırma~{"\n"}
Oran Orantı~{"\n"}
Denklem Çözme~{"\n"}
Problemler~{"\n"}
Sayı Problemleri~{"\n"}
Kesir Problemleri~{"\n"}
Yüzde Kar Zarar Problemleri~{"\n"}
Karışım Problemleri~{"\n"}
Grafik Problemleri~{"\n"}
Yaş Problemleri~{"\n"}
İşçi Problemleri~{"\n"}
Kar Zarar Problemleri~{"\n"}
Hız Problemleri~{"\n"}
Kümeler~{"\n"}
Kartezyen Çarpım~{"\n"}
Mantık~{"\n"}
Fonskiyonlar~{"\n"}
Polinomlar~{"\n"}
2.Dereceden Denklemler~{"\n"}
Permütasyon ve Kombinasyon~{"\n"}
Olasılık~{"\n"}
İstatistik~{"\n"}</Text>
<Text><Text style={{color:'#99E2DB'}}>Geometri{'\n'}</Text>
Doğruda Açılar~{"\n"}
Üçgende Açılar~{"\n"}
Özel Üçgenler~{"\n"}
Dik Üçgen~{"\n"}
İkizkenar Üçgen~{"\n"}
Eşkenar Üçgen~{"\n"}
Açıortay~{"\n"}
Kenarortay~{"\n"}
Üçgende Alan~{"\n"}
Üçgende Benzerlik~{"\n"}
Açı Kenar Bağıntıları~{"\n"}
Çokgenler~{"\n"}
Özel Dörtgenler~{"\n"}
Dörtgenler~{"\n"}
Deltoid~{"\n"}
Paralelkenar~{"\n"}
Eşkenar Dörtgen~{"\n"}
Dikdörtgen~{"\n"}
Kare~{"\n"}
İkizkenar~{"\n"}
Yamuk~{"\n"}
Çember ve Daire~{"\n"}
Noktanın Analitiği~{"\n"}
Doğrunun Analitiği~{"\n"}
Katı Cisimler~{"\n"}
Dikdörtgenler Prizması~{"\n"}
Küp~{"\n"}
Silindir~{"\n"}
Piramit~{"\n"}
Koni~{"\n"}
Küre~{"\n"}</Text>
<Text><Text style={{color:'#99E2DB'}}>Fizik ~{"\n"} </Text>
Fizik Bilimine Giriş~{"\n"}
Madde ve Özellikleri~{"\n"}
Sıvıların Kaldırma Kuvveti~{"\n"}
Basınç~{"\n"}
Hareket~{"\n"}
Dinamik~{"\n"}
İş, Güç ve Enerji~{"\n"}
Elektrik~{"\n"}
Optik~{"\n"}
Manyetizma~{"\n"}
Dalgalar~{"\n"}
</Text>
<Text><Text style={{color:'#99E2DB'}}>Coğrafya{'\n'}</Text>
Doğa ve İnsan~{"\n"}
Dünya’nın Şekli ve Hareketleri~{"\n"}
Coğrafi Konum~{"\n"}
Harita Bilgisi~{"\n"}
Atmosfer ve Sıcaklık~{"\n"}
İklimler~{"\n"}
Basınç ve Rüzgarlar~{"\n"}
Nem, Yağış ve Buharlaşma~{"\n"}
İç Kuvvetler / Dış Kuvvetler~{"\n"}
Su – Toprak ve Bitkiler~{"\n"}
Nüfus~{"\n"}
Göç~{"\n"}
Yerleşme~{"\n"}
Türkiye’nin Yer Şekilleri~{"\n"}
Ekonomik Faaliyetler~{"\n"}
Bölgeler~{"\n"}
Uluslararası Ulaşım Hatları~{"\n"}
Çevre ve Toplum~{"\n"}
Doğal Afetler~{"\n"}</Text>
<Text><Text style={{color:'#99E2DB'}}>Edebiyat{'\n'}</Text>
Anlam Bilgisi~{"\n"}
Dil Bilgisi~{"\n"}
Güzel Sanatlar ve Edebiyat~{"\n"}
Metinlerin Sınıflandırılması~{"\n"}
Şiir Bilgisi~{"\n"}
Edebi Sanatlar~{"\n"}
Türk Edebiyatı Dönemleri~{"\n"}
İslamiyet Öncesi Türk Edebiyatı ve Geçiş Dönemi~{"\n"}
Halk Edebiyatı~{"\n"}
Divan Edebiyatı~{"\n"}
Tanzimat Edebiyatı~{"\n"}
Servet-i Fünun Edebiyatı~{"\n"}
Fecr-i Ati Edebiyatı~{"\n"}
 Milli Edebiyat~{"\n"}
Cumhuriyet Şiiri~{"\n"}
Cumhuriyet Romanı~{"\n"}
Cumhuriyet Dönemi~{"\n"}
Edebiyat Akımları~{"\n"}
Dünya Edebiyatı~{"\n"} </Text>
<Text><Text style={{color:'#99E2DB'}}>Tarih{'\n'}</Text>
Tarih Bilimi~{"\n"}
İlk Uygarlıklar~{"\n"}
İlk Türk Devletleri~{"\n"}
İslam Tarihi ve Uygarlığı~{"\n"}
Türk-İslam Devletleri~{"\n"}
Orta Çağ ve Avrupa Tarihi~{"\n"}
Türkiye Tarihi~{"\n"}
Beylikten Devlete (1300-1453)~{"\n"}
Dünya Gücü: Osmanlı Devleti (1453-1600)~{"\n"}
Osmanlı Kültür ve Medeniyeti~{"\n"}
Yeni ve Yakın Çağda Avrupa Tarihi~{"\n"}
Arayış Yılları (17. Yüzyıl)~{"\n"}
Yeni Çağda Avrupa~{"\n"}
En Uzun Yüzyıl (1800-1922)~{"\n"}
20. Yüzyıl Başlarında Osmanlı Devleti~{"\n"}
1. Dünya Savaşı – Milli Mücadeleye Hazırlık Dönemi~{"\n"}
Kurtuluş Savaşı ve Antlaşmalar~{"\n"}
I. TBMM Dönemi~{"\n"}
Türk İnkılabı~{"\n"}
Atatürkçülük ve Atatürk İlkeleri~{"\n"}
Türk Dış Politikası~{"\n"}
<Text><Text style={{color:'#99E2DB'}}>Biyoloji {'\n'}</Text>
Canlıların Ortak Özellikleri~{"\n"}
Canlıların Temel Bileşenleri~{"\n"}
Hücre ve Organelleri~{"\n"}
Hücre Zarından Madde Geçişi~{"\n"}
Canlıların Sınıflandırılması~{"\n"}
Mitoz ve Eşeysiz Üreme~{"\n"}
Mayoz ve Eşeyli Üreme~{"\n"}
Kalıtım~{"\n"}
Ekosistem Ekolojisi~{"\n"}
Güncel Çevre Sorunları~{"\n"}
</Text>
<Text style={{color:'#99E2DB'}}>Kimya {'\n'}</Text>
Kimya Bilimi~{"\n"}
Atom ve Periyodik Sistem~{"\n"}
Kimyasal Türler Arası Etkileşimler~{"\n"}
Kimyasal Hesaplamalar~{"\n"}
Kimyanın Temel Kanunları~{"\n"}
Asit, Baz ve Tuz~{"\n"}
Maddenin Halleri~{"\n"}
Karışımlar~{"\n"}
Doğa ve Kimya~{"\n"}
Kimya Her Yerde~{"\n"}
</Text>

</Text>

</ScrollView>)}}


class App extends React.Component{
constructor(){super();}
render() {
return(
<View>
<View>
  <View style={style.welcome_area}>

  <Text style={style.welcome_text}>AYT-TYT UYGULAMA  </Text>
  </View>
  <Text style={{color:'#714DF4',fontSize:17,marginTop:10,marginLeft:27,marginBottom:10,}}>AYT SINAVI TARİHİ (GÜN/SAAT/DAKİKA)</Text>
  <CountDown
        size={30}
        until={13562850}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
        digitTxtStyle={{color: '#714DF4'}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        separatorStyle={{color: '#714DF4'}}
        timeToShow={['D','H', 'M',]}
        timeLabels={{m: null, s: null}}
        showSeparator
      />
  
  </View> 
  <Text style={{color:'#714DF4',fontSize:17,marginTop:10,marginLeft:27,marginBottom:10,}}>TYT SINAVI TARİHİ (GÜN/SAAT/DAKİKA)</Text>
  <CountDown
        size={30}
        until={13475162}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
        digitTxtStyle={{color: '#714DF4'}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        separatorStyle={{color: '#714DF4'}}
        timeToShow={['D','H', 'M',]}
        timeLabels={{m: null, s: null}}
        showSeparator
      />
  </View>
)}}

const AppNavigator = createBottomTabNavigator({
  Anasayfa:{screen:App
  },
  AYT:{screen:AYT
  },
TYT:{screen:TYT},

SoruÇözümAYT:{screen:VideoAyt
},
SoruÇözümTYT:{screen:VideoTyt
},
Notlar:{screen:Notalma},
});

const style =StyleSheet.create({
welcome_area:{paddingTop:150,backgroundColor:'#714DF4',marginBottom:80,},
welcome_text:{color:'white',fontSize:25,marginLeft:60,marginBottom:70,},
});export default createAppContainer(AppNavigator);