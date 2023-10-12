export interface Food {
    id: number;
    name: string;

    type: string | null;
    price: number | null;
    
    calories: number | null;

    protein?: number | null;


    carbohydrates?: number | null;
    sugars?: number | null;
    fiber?: number | null;

    fats?: number | null;

    vitamin_a_mg?: number;
    vitamin_b1_mg?: number; //Thiamin
    vitamin_b2_mg?: number; //Riboflavin
    vitamin_b3_mg?: number; //Niacin
    vitamin_b5_mg?: number; //Panothenic Acid
    vitamin_b6_mg?: number; //Pyridoxal
    vitamin_b7_mg?: number; //Biotin
    vitamin_b9_mg?: number; //Folate
    vitamin_b12_mg?: number; //Cobalamin
    vitamin_c_mg?: number;
    vitamin_d_mg?: number;
    vitamin_e_mg?: number;
    vitamin_k_mg?: number;

    //Minerals
    calcium_mg?: number;
    chloride_mg?: number;
    //chromium_ug: number;
    copper_mg?: number;
    //flouride_ug: number;
    iron_mg?: number;
    magnesium_mg?: number;
    manganese_mg?: number;
    molybdenum_mg?: number;
    phosphorus_mg?: number;
    potassium_mg?: number;
    selenium_ug?: number;
    sodium_mg?: number;
    zinc_mg?: number;

}