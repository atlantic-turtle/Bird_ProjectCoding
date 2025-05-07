const bird_info = [
    { name: "Brahminy Kite", region: "Throughout the Indian subcontinent including coastlines, wetlands and urban areas"},
    { name: "Common Tailorbird", region: " Throughout much of India especially in scrub jungles, gardens and wooded areas"},
    { name: "Indian Roller", region: "Karnataka,Telangana, Odisha"},
    { name: "Jungle Crow", region: "South of the Himalayas"},
    { name: "Common Crow", region: "Across Indian subconctinent(everywhere!)"},
    { name: "Rock Pigeon", region: "Across Indian subcontinent(everywhere!)"},
    { name: "Indian Peafowl", region: "Across India, especially Rajasthan, Tamil Nadu, Madhya Pradesh" },
    { name: "House Sparrow", region: "All over India: cities, towns, villages" },
    { name: "Common Myna", region: "Pan-India, especially urban and semi-urban regions" },
    { name: "Rose-ringed Parakeet", region: "Northern and central India: Delhi, Punjab, UP, MP" },
    { name: "Indian Robin", region: "Southern and central India: Maharashtra, Karnataka, Tamil Nadu" },
    { name: "Red-vented Bulbul", region: "Across India: south, west, and northeast regions" },
    { name: "White-throated Kingfisher", region: "Throughout India, especially Kerala, West Bengal, Goa" },
    { name: "Black Drongo", region: "North, central, and east India: UP, Bihar, Assam" },
    { name: "Cattle Egret", region: "Widespread in farmlands: Punjab, Haryana, Bengal, Kerala" },
    { name: "Purple Sunbird", region: "South and west India: Gujarat, Telangana, Andhra Pradesh" },
    { name: "Asian Koel", region: "All over India, especially in tree-rich areas like Kerala and Assam" },
    { name: "Greater Coucal", region: "Common in rural and forested areas: Odisha, Jharkhand, Chhattisgarh" },
    { name: "Indian Grey Hornbill", region: "Northern and central India: Delhi, UP, MP, Chhattisgarh" },
    { name: "Malabar Grey Hornbill", region: "Western Ghats: Kerala, Karnataka, Goa" },
    { name: "Green Bee-eater", region: "Northern and western India: Rajasthan, Haryana, Gujarat" },
    { name: "Indian Pitta", region: "Western and central India: Maharashtra, Rajasthan, Madhya Pradesh" },
    { name: "Oriental Magpie-Robin", region: "Widespread in gardens and forests: Bengal, Kerala, NE India" },
    { name: "Jungle Babbler", region: "Northern and central India: Delhi, UP, MP, Bihar" },
    { name: "Brown-headed Barbet", region: "Eastern and southern India: Odisha, Tamil Nadu, Karnataka" },
    { name: "Grey Francolin", region: "Dry regions: Rajasthan, Gujarat, Haryana" },
    { name: "Indian Paradise Flycatcher", region: "Forests in MP, Uttarakhand, and Karnataka" },
    { name: "Laughing Dove", region: "Pan-India, especially drier zones in Rajasthan, Telangana" },
    { name: "Spot-billed Duck", region: "Wetlands in Assam, Bengal, and south India" },
    { name: "Painted Stork", region: "Lakes and wetlands in Tamil Nadu, Odisha, and UP" },
    { name: "Sarus Crane", region: "Wetlands in UP, Gujarat, Rajasthan, and Bihar" },
    { name: "Black-necked Crane", region: "High-altitude regions: Ladakh and Arunachal Pradesh" },
    { name: "Himalayan Monal", region: "Western Himalayas: Himachal Pradesh, Uttarakhand" },
    { name: "Red-whiskered Bulbul", region: "Southern and eastern India: TN, Kerala, Bengal" },
    { name: "Nilgiri Flycatcher", region: "Western Ghats: Kerala and Tamil Nadu (Nilgiris)" },
    { name: "Nicobar Pigeon", region: "Andaman and Nicobar Islands" },
    { name: "Andaman Woodpecker", region: "Endemic to Andaman Islands" },
    { name: "Vernal Hanging Parrot", region: "Western Ghats and Northeast India" },
    { name: "Indian Skimmer", region: "Riverine areas of Odisha, UP, and MP" },
    { name: "Baya Weaver", region: "Grasslands and farmland across India, especially Bengal and Maharashtra" },
    { name: "Streak-throated Swallow", region: "Rivers and open country in central and northern India" },
    { name: "Rufous Treepie", region: "Forests across India: MP, Karnataka, Odisha, Kerala" },
    { name: "Ashy Prinia", region: "Grasslands and shrubs in southern India: Andhra Pradesh, TN" },
    { name: "Plum-headed Parakeet", region: "Forests of central and northern India" },
    { name: "Black-hooded Oriole", region: "Woodlands in Assam, Bengal, Kerala, and Odisha" },
    { name: "Indian Bush Lark", region: "Dry scrublands: Gujarat, Rajasthan, and Maharashtra" },
    { name: "Chestnut-headed Bee-eater", region: "North East India, especially Assam and Arunachal Pradesh" },
    { name: "Bar-headed Goose", region: "Migratory – Northern India wetlands, especially Bharatpur (Rajasthan)" },
    { name: "Indian Scops Owl", region: "Across India: forests, groves, and semi-urban areas" },
    { name: "Brown Fish Owl", region: "Dense forests in Western Ghats, central India, and Assam" },
    { name: "Little Cormorant", region: "Lakes, ponds, and rivers across India, especially Tamil Nadu and Bengal" },
    { name: "Greater Flamingo", region: "Coastal Gujarat (Kutch), Mumbai, and parts of Tamil Nadu" },
    { name: "Grey Heron", region: "Wetlands across India, especially UP, Assam, and Kerala" },
    { name: "Eurasian Spoonbill", region: "Wetlands in Andhra Pradesh, Tamil Nadu, and Odisha" },
    { name: "Pied Kingfisher", region: "Rivers and lakes across UP, MP, West Bengal" },
    { name: "River Tern", region: "Large rivers and reservoirs in central and south India" },
    { name: "White-bellied Sea Eagle", region: "Coastal regions: Andaman Islands, Kerala, Odisha" },
    { name: "Short-toed Snake Eagle", region: "Open grasslands in Rajasthan, MP, and Maharashtra" },
    { name: "Peregrine Falcon", region: "Cliffs and tall buildings in many parts of India; winter visitor" },
    { name: "Indian Eagle-Owl", region: "Hilly and rocky regions: Gujarat, Telangana, and MP" },
    { name: "Bay-backed Shrike", region: "Dry scrub and open areas in north and central India" },
    { name: "Indian Cuckoo", region: "Forested regions across India; more common in monsoon season" },
    { name: "Long-tailed Shrike", region: "Open fields and edges of forests: Punjab to Bengal" },
    { name: "Coppersmith Barbet", region: "Urban parks and woodlands: Kerala, Maharashtra, and Delhi" },
    { name: "Tickell’s Blue Flycatcher", region: "Forests of South and Central India, especially Western Ghats" },
    { name: "Indian Golden Oriole", region: "Deciduous forests and plantations: Jharkhand, Bengal, Odisha" },
    { name: "Yellow-footed Green Pigeon", region: "Forests across Maharashtra, Rajasthan, and Gujarat" },
    { name: "Blue-faced Malkoha", region: "Dense forests: Assam, Meghalaya, and Western Ghats" },
    { name: "Spotted Dove", region: "Widespread, especially in gardens and light woodlands of East and South India" },
    { name: "White-browed Wagtail", region: "Near water bodies across peninsular India" },
    { name: "Indian Silverbill", region: "Dry open habitats: Rajasthan, Gujarat, and Telangana" },
    { name: "Scaly-breasted Munia", region: "Grassy areas in Kerala, TN, West Bengal, and NE India" },
    { name: "Indian Spot-billed Duck", region: "Wetlands across peninsular India" },
    { name: "Woolly-necked Stork", region: "Open wetlands and agricultural fields in MP, Odisha, and Assam" },
    { name: "Crimson Sunbird", region: "Himalayan foothills and Northeast: Sikkim, Meghalaya, Arunachal" },
    { name: "Bronze-winged Jacana", region: "Wetlands in West Bengal, Assam, and eastern India" },
    { name: "Indian Courser", region: "Dry plains and grasslands in Rajasthan and Gujarat" },
    { name: "Wire-tailed Swallow", region: "Riverbanks and open country across India" },
    { name: "Indian Nightjar", region: "Open scrubland and rural areas: Maharashtra, Gujarat, and Bihar" },
    { name: "Himalayan Griffon Vulture", region: "High altitude zones: Ladakh, Himachal, Uttarakhand" },
    { name: "Forest Wagtail", region: "Winter migrant to southern forests: Kerala, TN, Karnataka" },
    { name: "Indian Black-lored Tit", region: "Himalayan foothills: Uttarakhand, Himachal, Sikkim" },
    { name: "White-rumped Shama", region: "Forests and groves in NE India, Western Ghats" },
    { name: "Puff-throated Babbler", region: "Moist forests in NE India, Sikkim, and parts of West Bengal" },
    { name: "Grey Junglefowl", region: "Western Ghats, southern forests: TN, Karnataka, Kerala" }
]

function get_bird_info() {
    let wanted_bird_name = document.getElementById("bird_name").value
    wanted_bird_name = wanted_bird_name.toLowerCase()
    let place = "" 
    let display_container = document.getElementById("display_container")
    let display = document.getElementById("display")

    for (let bird of bird_info) {
        let bird_name = bird.name
        bird_name = bird_name.toLowerCase()
        if (wanted_bird_name == bird_name) {
            let region = bird.region
            console.log(region) 
            display_container.style.display="flex"
            display.innerText = "Found in: " + region
            return
        }
    }
}