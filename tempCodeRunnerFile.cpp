#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    // Define the 2D array
    vector<vector<int>> arr = {{5, 7}, {1, 6}, {9, 10}};

    // Sort the 2D array based on the first element of each sub-array
    sort(arr.begin(), arr.end());

    // Output the sorted 2D array
    cout << "Sorted 2D array:" << endl;
    for (const auto& row : arr) {
        for (int elem : row) {
            cout << elem << " ";
        }
        cout << endl;
    }

    return 0;
}
